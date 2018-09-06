<script>
  import TabNav from './tab-nav';

  export default {
    name: 'NeoTabs',

    components: {
      TabNav
    },

    props: {
      type: String,
      activeName: String,
      closable: Boolean,
      addable: Boolean,
      value: {},
      editable: Boolean,
      beforeLeave: Function,
      stretch: Boolean
    },

    provide() {
      return {
        rootTabs: this
      };
    },

    data() {
      return {
        currentName: this.value || this.activeName,
        panes: []
      };
    },

    watch: {
      activeName(value) {
        this.setCurrentName(value);
      },
      value(value) {
        this.setCurrentName(value);
      },
      currentName(value) {
        if (this.$refs.nav) {
          this.$nextTick(_ => {
            this.$refs.nav.scrollToActiveTab();
          });
        }
      }
    },

    methods: {
      handleTabClick(tab, tabName, event) {
        if (tab.disabled) return;
        this.setCurrentName(tabName);
        this.$emit('tab-click', tab, event);
      },
      handleTabRemove(pane, ev) {
        if (pane.disabled) return;
        ev.stopPropagation();
        this.$emit('edit', pane.name, 'remove');
        this.$emit('tab-remove', pane.name);
      },
      handleTabAdd() {
        this.$emit('edit', null, 'add');
        this.$emit('tab-add');
      },
      setCurrentName(value) {
        const changeCurrentName = () => {
          this.currentName = value;
          this.$emit('input', value);
        };
        if (this.currentName !== value && this.beforeLeave) {
          const before = this.beforeLeave();
          if (before && before.then) {
            before.then(() => {
              changeCurrentName();

              this.$refs.nav && this.$refs.nav.removeFocus();
            });
          } else if (before !== false) {
            changeCurrentName();
          }
        } else {
          changeCurrentName();
        }
      },
      addPanes(item) {
        const index = this.$slots.default.indexOf(item.$vnode);
        this.panes.splice(index, 0, item);
      },
      removePanes(item) {
        const panes = this.panes;
        const index = panes.indexOf(item);
        if (index > -1) {
          panes.splice(index, 1);
        }
      }
    },
    render(h) {
      let {
        type,
        handleTabClick,
        handleTabRemove,
        handleTabAdd,
        currentName,
        panes,
        editable,
        addable,
        stretch
      } = this;

      const newButton = editable || addable
        ? (
          <span
            class="neo-tabs__new-tab"
            on-click={ handleTabAdd }
            tabindex="0"
            on-keydown={ (ev) => { if (ev.keyCode === 13) { handleTabAdd(); }} }
          >
            <i class="neo-icon-plus"></i>
          </span>
        )
        : null;

      const navData = {
        props: {
          currentName,
          onTabClick: handleTabClick,
          onTabRemove: handleTabRemove,
          editable,
          type,
          panes,
          stretch
        },
        ref: 'nav'
      };
      const header = (
        <div class={['neo-tabs__header']}>
          {newButton}
          <tab-nav { ...navData }></tab-nav>
        </div>
      );
      const panels = (
        <div class="neo-tabs__content">
          {this.$slots.default}
        </div>
      );

      return (
        <div class={{
          'neo-tabs': true,
          'neo-tabs--card': type === 'card',
        }}>
          {[header, panels] }
        </div>
      );
    },
    created() {
      if (!this.currentName) {
        this.setCurrentName('0');
      }
    }
  };
</script>
