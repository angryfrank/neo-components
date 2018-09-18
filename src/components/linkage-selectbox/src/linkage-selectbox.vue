<template>
    <div class='neo-linkage-selectbox'>
        <div v-if="levelNum > 0">
            <div class="neo-linkage-selectbox__item" v-for="(item,level) in selectsList" :key="item.value">
                <div class="neo-linkage-selectbox__item-label">
                    <span>{{item.label}}:</span>
                </div>
                <div class="neo-linkage-selectbox__item-value">
                    <!-- 按钮式筛选区 -->
                    <div v-if="level < levelNum - 1">
                        <ul class="type-1">
                            <li v-for="(subitem,index) in item.list" :key="subitem.value" @click="handleBtnSelectClick(level, subitem.skuNo)">
                                <div class="tag-select" :class="[
                              {'is-selected':subitem.skuNo === btnSelectedList[level]},
                              {'is-ordered':subitem.skuNo !== btnSelectedList[level] && subitem.isOrdered}]">{{subitem.label}}
                                    <i class="neo-icon" v-show="subitem.skuNo !== btnSelectedList[level] && subitem.isOrdered">&#xe6ac;</i></div>
                            </li>
                        </ul>
                    </div>
                    <!-- 数量型筛选区 -->
                    <div v-else>
                        <ul class="type-2">
                            <li v-for="subitem in item.list.slice(0, 3)" :key="subitem.value">
                                <div class="num-select">
                                    <span>{{subitem.label}}</span>
                                    <span>{{"US$"+subitem.price}}</span>
                                    <span>{{"可售:"+subitem.stock}}</span>
                                    <neo-input-number v-model="subitem.count" :min="0" :max="subitem.stock" :step="1"
                                        :disabled="subitem.stock <= 0" @change="handleNumSelectChange(subitem.count,subitem.skuNo)"></neo-input-number>
                                </div>
                            </li>
                            <div v-show="item.list.length > 3 && showMore">
                                <li v-for="subitem in item.list.slice(3)" :key="subitem.value">
                                    <div class="num-select">
                                        <span>{{subitem.label}}</span>
                                        <span>{{"US$"+subitem.price}}</span>
                                        <span>{{"可售:"+subitem.stock}}</span>
                                        <neo-input-number v-model="subitem.count" :min="0" :max="subitem.stock" :step="1"
                                            :disabled="subitem.stock <= 0" @change="handleNumSelectChange(subitem.count,subitem.skuNo)"></neo-input-number>
                                    </div>
                                </li>
                            </div>
                        </ul>
                        <div v-if="item.list.length > 3 && !showMore" class="show-more">
                            <span @click="showMore = true">更多&nbsp;<i class="neo-icon">&#xe709;</i></span>
                        </div>
                        <div class="statistics">
                            <span>已选</span>
                            <p>
                                <span>{{statisticsInfo.totalCount}}</span> 件，
                                <span>{{statisticsInfo.totalPrice}}</span> 元
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NeoLinkageSelectbox',
        props: {
            selectOptions: {
                type: Array,
                required: true
            },
            maxStock: {
                type: Number,
                default: 9999
            },
            addCartFlag: {
                type: Number,
                required: true
            },
        },
        data() {
            return {
                selectedDatas: [],//最终提交的数据
                selectsList: [],
                linkagesList: [],
                btnSelectedList: [],
                showMore: false,
            }
        },
        computed: {
            levelNum() {
                return this.selectsList.length;
            },
            statisticsInfo() {
                let obj = {};
                if (this.selectsList && this.selectsList.length > 0) {
                    let totalCount = 0;
                    let totalPrice = 0;
                    this.selectsList[this.selectsList.length - 1].list.forEach(item => {
                        totalCount += item.count;
                        totalPrice += item.count * item.price;
                    });

                    obj.totalCount = totalCount;
                    obj.totalPrice = totalPrice;
                }
                return obj;
            },
        },
        watch: {
            selectOptions: {
                handler: function (val, oldVal) {
                    if (val && val.length > 0) {
                        this.init();
                    }
                },
                immediate: true,
            },
            addCartFlag: {
                handler: function (val, oldVal) {
                    this.init();
                },
                immediate: false,
            },
        },
        methods: {
            init,
            initSelectsList,
            packageData1,
            initLinkagesList,
            packageData2,
            handleBtnSelectClick,
            handleNumSelectChange,
            updateOrdered,
            isThisSkuNoOrdered,
        },
    }

    function init() {
        this.selectedDatas = [];
        this.btnSelectedList = [];
        this.initSelectsList();
        this.initLinkagesList();
    }

    //筛选条件展示列表
    function initSelectsList() {
        this.selectsList = [];
        let dataArr = this.selectOptions;
        if (dataArr) {
            this.packageData1(dataArr);
        }
        this.selectsList.reverse();
    }

    //将原始数据封装成可供展示的数据
    function packageData1(dataArr) {
        let tempObj = {};
        let tempList = [];
        dataArr.forEach((item, index) => {
            if (index === 0) {
                tempObj = {
                    label: item.type === 1 ? item.attrNoText : item.diyAttrValue,
                    value: item.type === 1 ? item.attrNo : item.diyAttrName
                }
                if (item.child && item.child.length > 0) {
                    this.packageData1(item.child);
                }
            }
            let tempObj2 = {
                skuNo: item.skuNo,
                label: item.type === 1 ? item.attrValueNoText : item.diyAttrValue,
                value: item.type === 1 ? item.attrValueNo : item.diyAttrName,
            };
            //处理库存数量
            if (item.stockType) {
                tempObj2.stockType = item.stockType;
                tempObj2.stock = item.stockType === 1 ? item.stock : this.maxStock;
                tempObj2.price = item.price;
                tempObj2.count = 0;
            } else {
                tempObj2.isOrdered = false;
                if (index === 0) {
                    this.btnSelectedList.push(item.skuNo);
                }
            }
            tempList.push(tempObj2);
        });
        if (tempList.length > 0) {
            tempObj.list = tempList;
        }
        this.selectsList.push(tempObj);
        this.btnSelectedList.reverse();
    }

    //点击联动列表
    function initLinkagesList() {
        this.linkagesList = [];
        let dataArr = this.selectOptions;
        if (dataArr) {
            this.packageData2(0, [], dataArr, "");
        }
    }

    function packageData2(level, list, dataArr, skuNoKey) {
        dataArr.forEach((item, index) => {
            let obj = {
                skuNo: item.skuNo,
                type: item.type,
            };
            if (item.type === 1) {//系统自带规格
                obj.attrNo = item.attrNo;
                obj.attrValueNo = item.attrValueNo;
            } else {//用户自定义规格
                obj.diyAttrName = item.diyAttrName;
                obj.diyAttrValue = item.diyAttrValue;
            }
            let mapKay = skuNoKey + "-" + item.skuNo;
            //处理重复添加
            if (list.length >= level) {
                list.splice(level, list.length);
            }
            list.push(obj);
            if (item.child && item.child.length > 0) {
                this.packageData2(level + 1, list, item.child, mapKay);
            } else {
                obj.price = item.price;
                obj.stockType = item.stockType;
                obj.stock = item.stock;
                obj.count = 0;
                this.linkagesList.push({
                    skuNoKey: mapKay.replace("-", ""),
                    list: Object.clone(list)
                });
            }
        });
    }

    function handleBtnSelectClick(level, skuNo) {
        // console.log("-------------handleBtnSelectClick:层次level-------------", level);
        // console.log("-------------handleBtnSelectClick:skuNo------------", skuNo);
        if (this.btnSelectedList[level] !== skuNo) {
            this.btnSelectedList.splice(level, 1, skuNo);
            let subSkuNoKey = "";
            if (level === 0) {
                subSkuNoKey += skuNo + "-";
            } else {
                subSkuNoKey += "-" + skuNo + "-"
            }
            let list = this.linkagesList.filter(item => {
                if (item.skuNoKey.indexOf(subSkuNoKey) !== -1) {
                    return item;
                }
            })
            // console.log("list", list);

            this.selectsList.forEach((item1, index1) => {
                //若修改的level为0，则筛选条件列表调整1-levelNum
                if (index1 > level && index1 < this.levelNum - 1) {//按钮筛选调整
                    item1.list.forEach((item2, index2) => {
                        let obj = list[index1 * index2 * 3].list[index1];
                        if (index2 === 0) {
                            this.btnSelectedList.splice(level + 1, 1, obj.skuNo);
                        }
                        item2.skuNo = obj.skuNo;
                        item2.value = obj.type === 1 ? obj.attrValueNo : obj.diyAttrName;
                    })
                } else if (index1 === this.levelNum - 1) {//数字筛选调整
                    item1.list.forEach((item2, index2) => {
                        let obj = list[index2].list[index1];
                        // console.log("item2",item2);
                        // console.log("obj",obj);
                        item2.skuNo = obj.skuNo;
                        item2.value = obj.type === 1 ? obj.attrValueNo : obj.diyAttrName;
                        item2.stockType = obj.stockType;
                        item2.stock = obj.stock;
                        item2.price = obj.price;
                        item2.count = obj.count;
                    });
                }
            });

            this.updateOrdered();
        }
    }

    function updateOrdered() {
        this.selectsList.forEach((item1, index1) => {
            if (index1 < this.levelNum - 1) {
                item1.list.forEach((item2, index2) => {
                    item2.isOrdered = this.isThisSkuNoOrdered(index1, item2.skuNo);
                });
            }
        })
    }

    function handleNumSelectChange(count, skuNo) {
        // console.log("-------------handleNumSelectChange-------------", count, skuNo);
        let skuNoKey = "";
        if (this.btnSelectedList && this.btnSelectedList.length > 0) {
            skuNoKey = this.btnSelectedList.join("-");
        }
        if (skuNoKey) {
            skuNoKey += "-" + skuNo;
        } else {
            skuNoKey = skuNo;
        }
        let dataArr = null;
        for (let i = 0, len = this.linkagesList.length; i < len; i++) {
            if (this.linkagesList[i].skuNoKey === skuNoKey) {
                dataArr = this.linkagesList[i].list;
                break;
            }
        }
        if (dataArr) {
            let dataIndex = -1;
            for (let i = 0, len = this.selectedDatas.length; i < len; i++) {
                if (this.selectedDatas[i].skuNo === skuNo) {
                    dataIndex = i;
                    this.selectedDatas[i].count = count;
                    break;
                }
            }
            if (count === 0) {//移除
                this.selectedDatas.splice(dataIndex, 1);
            } else {
                if (dataIndex === -1) {//不存在，新增
                    let cartItem = {
                        skuNo: skuNo,
                        count: count,
                        price: dataArr[dataArr.length - 1].price
                    };
                    let propertyList = [];
                    dataArr.forEach(item => {
                        let obj = {
                            type: item.type,
                        };
                        if (item.type === 1) {
                            obj.attrNo = item.attrNo;
                            obj.attrValueNo = item.attrValueNo;
                        } else {
                            obj.diyAttrValue = item.diyAttrValue;
                            obj.diyAttrName = item.diyAttrName;
                        }
                        propertyList.push(obj);
                    });
                    cartItem.propertyList = propertyList;
                    this.selectedDatas.push(cartItem);
                }
            }
            //提交至v-model
            this.$emit("input", this.selectedDatas);
            //将数据保留下来，共btnSelect切换时初始化数据
            dataArr[dataArr.length - 1].count = count;
        } else {
            console.log("linkagesList里找不到数据！！！");
        }
    }

    function isThisSkuNoOrdered(level, skuNo) {
        let subSkuNoKey = "";
        if (level === 0) {
            subSkuNoKey += skuNo + "-";
        } else {
            for (let i = 0; i < level; i++) {
                subSkuNoKey += this.btnSelectedList[i] + "-";
            }
            subSkuNoKey += skuNo;
        }
        let count = 0;
        this.linkagesList.forEach(item => {
            if (item.skuNoKey.indexOf(subSkuNoKey) > -1) {
                count += item.list[this.levelNum - 1].count;
            }
        });
        return count > 0;
    }

    Object.clone = function (sObj) {
        if (typeof sObj !== "object") {
            return sObj;
        }

        var s = {};

        if (sObj.constructor == Array) {
            s = [];
        }

        for (var i in sObj) {
            s[i] = Object.clone(sObj[i]);
        }

        return s;
    };
</script>