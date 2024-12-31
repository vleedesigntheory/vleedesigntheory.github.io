(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{249:function(t,e,a){"use strict";a.r(e);var i=a(0),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端需要了解的5g网络知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端需要了解的5g网络知识"}},[t._v("#")]),t._v(" 前端需要了解的5G网络知识")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("5G是第五代移动通信技术的简称，是通信领域的又一次较大的技术升级，作为前端的我们虽然或多或少了解一些通信知识，但大多都是基于《通信原理》等课程了解到的，随着技术的发展，前端网络侧的优化也会有一定的涉及到通信领域的知识，关于各端渲染优化的问题可以参看这篇文章"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/y38l12pTBM5YePCmC6IXaQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("【第1996期】前端性能优化：当页面渲染遇上边缘计算"),a("OutboundLink")],1),t._v("，本篇旨在介绍5G网络领域相关的一些术语及知识，了解网络侧的一些概念，方便日后在涉及相关优化时有一个基本的认识")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth01.png",alt:"图片"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名词")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("中文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Access Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("接入网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MSAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Multi-Service Access Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("综合业务接入网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("OLT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Optical Line Terminal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("光线路终端")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ODN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Optical Distribution Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("光配线网，俗称分光器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ONT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Optical Network Terminal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("光网络终端")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Metropolitan Area Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("城域网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BRAS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Broadband Remote Access Server")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("宽带远程接入服务器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Service Route")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("全业务路由器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SW")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Switch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("交换机")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Broadband Router")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("汇聚路由器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Core Router")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("核心路由器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Access Router")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("接入路由器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("IP BackBone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IP Backbone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IP骨干网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FW")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Fire Wall")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("防火墙")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("OTN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Optical Transport Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("光传送网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Cloud Core Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Cloud Core Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("云核心网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("IP Bearel Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IP Bearel Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IP承载网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Radio Access Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无线接入网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BSC/RNC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Base Station Controller/Radio Network Controller")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("基站控制器/无线网络控制器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RAN/PTN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Radio Access Network/Packet Transport Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无线接入网/分组传送网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MSTP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Multi-Service Transport Platform")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("多业务传送平台")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RTN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Real-time Network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("即时网络")])])])]),t._v(" "),a("ul",[a("li",[t._v("无线侧")])]),t._v(" "),a("p",[t._v("手机或集团客户通过基站接入到无线接入网，通过无线接入网或IP无限接入网或分组传送网方案进行处理，将信号传递给基站控制器/无线网络控制器，再将信号传给核心网，核心网内部网元通过IP承载网来承载")]),t._v(" "),a("ul",[a("li",[t._v("固网侧")])]),t._v(" "),a("p",[t._v("家庭客户和集团客户通过接入网接入，接入网主要是光线路终端、分光器、光网络终端，信号从接入网进入城域网，城域网分为接入层、汇聚层、核心层，接着进入骨干网，骨干网也可以分为核心层和接入层")]),t._v(" "),a("h2",{attrs:{id:"接入网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入网"}},[t._v("#")]),t._v(" 接入网")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth02.jpeg",alt:"图片"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名词")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("中文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BBU")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Building Base band Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("基带处理单元")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CU")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Centralized Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("集中单元")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DU")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Distribute Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("分布单元")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RRU")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Remote Radio Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("射频拉远单元")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AAU")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Active Antenna Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有源天线单元")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth03.jpeg",alt:"图片"}})]),t._v(" "),a("p",[t._v("早期主要是由基站作为接入网的重要组成部分，包括室内基带处理单元、射频拉远单元、馈线和天线，其中BBU包括集中单元和分布单元，后来随着分布化和云化或中心化的改进，最后组成部分分拆成了集中单元、分布单元和有源天线单元")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth04.png",alt:"图片"}})]),t._v(" "),a("ul",[a("li",[t._v("CU 集中单元")])]),t._v(" "),a("p",[t._v("非实时部分分割出来，处理非实时协议和服务")]),t._v(" "),a("ul",[a("li",[t._v("DU 分布单元")])]),t._v(" "),a("p",[t._v("处理物理层协议和实时服务")]),t._v(" "),a("ul",[a("li",[t._v("AAU 有源天线单元")])]),t._v(" "),a("p",[t._v("原BBU部分物理层及无源天线合并为AAU")]),t._v(" "),a("h2",{attrs:{id:"承载网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#承载网"}},[t._v("#")]),t._v(" 承载网")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth05.jpeg",alt:"图片"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名词")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("中文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("WDM")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Wavelength Division Multiple")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("波分复用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MSC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Mobile Switching Center")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("移动交换中心")])])])]),t._v(" "),a("p",[t._v("在5g网络中，为满足不同场景需要，对功能进行了划分，王源下沉，在承载网上主要是传送方式的变化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("前传 AAU↔DU")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("光纤直连")])]),t._v(" "),a("li",[a("p",[t._v("无源WDM")])]),t._v(" "),a("li",[a("p",[t._v("有源WDM/OTN")])])])]),t._v(" "),a("li",[a("p",[t._v("中传+回传 DU↔CU CU以上")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("分组增强OTN+IPRAN")])]),t._v(" "),a("li",[a("p",[t._v("端到端分组增强OTN")])])])])]),t._v(" "),a("h2",{attrs:{id:"核心网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心网"}},[t._v("#")]),t._v(" 核心网")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth07.jpeg",alt:"图片"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth08.jpeg",alt:"图片"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名词")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("英文全称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("中文全称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Packet Switch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("包交换机")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("EPC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Evolved Packet Core")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("演进的分组核心网")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Mobility Management Entity")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("移动管理实体")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SGW")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Serving Gateway")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务网关")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PGW")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PDN Gateway")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PDN网关")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Network Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("网络功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AMF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Access and Mobility Management Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("接入和移动性管理")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Session Management Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("会话管理")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("User Plane")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Control Plane")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("控制面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UPF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("User Plane Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户平面功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UDM")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("User Data Management")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("统一数据管理")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UDR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("User Data Repository")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("统一数据存储")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PCF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Policy Control Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("策略控制功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AUSF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Authentication Server Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("认证服务器功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NEF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Network Exposure Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("网络能力开发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NSSF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Network Slice Selection Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("网络切片选择功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NRF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NF Repository Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("网络注册功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NFV")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Network Functions Virtualization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("网元功能虚拟化")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MEC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Mobile Edge Computing")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("边缘计算")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth06.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("5g核心网就是更加分片、更加虚拟化，借助IT领域的微服务理念，基于云原生架构设计而产生的SBA架构，将多功能整体分为具有各自功能的微服务")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tech/cs/fifth/fifth09.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("从整个5g演进来看，云边协同、云网融合是未来发展的趋势，对于前端来说，今年炒的火热的Serverless也会对前端的开发造成一定的影响，设想未来会只有云端工程师，没有了前后端的概念，所有服务都是基于云化的，而云和网的关系好比锅和锅盖的关系，对于前端来说了解一些硬件通信的知识对未来更好应用这些基础服务是有帮助的")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/G8tnIVjjMJhdReXTpa_C0g",target:"_blank",rel:"noopener noreferrer"}},[t._v("全面：一文看懂5G网络（接入网+承载网+核心网）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/BqJMPGAFkheZQhTkTM9JRA",target:"_blank",rel:"noopener noreferrer"}},[t._v("到底什么是“云网融合”？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.sohu.com/a/253363776_296462",target:"_blank",rel:"noopener noreferrer"}},[t._v("5G核心网，这次你是真的变了吗？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/u014096903/article/details/78592973",target:"_blank",rel:"noopener noreferrer"}},[t._v("5G系统RAN架构解析之CU和DU的应用和功能切分方式"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/Rong_Toa/article/details/88674488",target:"_blank",rel:"noopener noreferrer"}},[t._v("5G基站君的进化之路 — CU和DU分离"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/y38l12pTBM5YePCmC6IXaQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("【第1996期】前端性能优化：当页面渲染遇上边缘计算"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/1QPc2EZQs3jjPOK7-K6H7Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSR、SSR、NSR、ESR傻傻分不清楚，一文帮你理清前端渲染方案！"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/TuUntNjyXw-EOA9Nh-hXZQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里 Midway 正式发布 Serverless v1.0，研发提效 50%"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);