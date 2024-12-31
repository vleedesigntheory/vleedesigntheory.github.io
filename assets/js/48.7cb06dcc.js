(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{252:function(v,_,t){"use strict";t.r(_);var l=t(0),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"前端需要了解的计算机网络知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端需要了解的计算机网络知识"}},[v._v("#")]),v._v(" 前端需要了解的计算机网络知识")]),v._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("ul",[t("li",[v._v("七层网路协议\n"),t("ul",[t("li",[v._v("物理层 -> 数据链路层 -> 网络层 -> 传输层 -> 会话层 -> 表示层 -> 应用层")])])]),v._v(" "),t("li",[v._v("http和tcp\n"),t("ul",[t("li",[v._v("http是应用层协议，tcp是传输层协议")]),v._v(" "),t("li",[v._v("常见的应用层协议还包括：telnet，ssh，smtp，pop，ssl/tls，mime\n常见传输层协议还有：udp，sctp")])])])]),v._v(" "),t("h2",{attrs:{id:"web和http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web和http"}},[v._v("#")]),v._v(" Web和HTTP")]),v._v(" "),t("h3",{attrs:{id:"http概况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http概况"}},[v._v("#")]),v._v(" HTTP概况")]),v._v(" "),t("ul",[t("li",[v._v("HTTP服务器并不保存关于客户的任何信息，因此HTTP是一个无状态协议(stateless protocol)")])]),v._v(" "),t("h3",{attrs:{id:"非持续连接和持续连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非持续连接和持续连接"}},[v._v("#")]),v._v(" 非持续连接和持续连接")]),v._v(" "),t("ul",[t("li",[v._v("采用非持续连接的http是每个tcp最多允许传输一个对象")])]),v._v(" "),t("h3",{attrs:{id:"http报文格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http报文格式"}},[v._v("#")]),v._v(" HTTP报文格式")]),v._v(" "),t("ul",[t("li",[v._v("HTTP请求报文\n"),t("ul",[t("li",[v._v("请求行=方法+sp+URL+sp+版本+cr+lf\n"),t("ul",[t("li",[v._v("GET /somedir/page.html HTTP/1.1")])])]),v._v(" "),t("li",[v._v("首部行=首部字段名+sp+值+cr+lf\n"),t("ul",[t("li",[v._v("Host:www.someschool.edu")]),v._v(" "),t("li",[v._v("Connection:close")]),v._v(" "),t("li",[v._v("User-agent:Mozilla/5.0")]),v._v(" "),t("li",[v._v("Accept-language:fr")])])]),v._v(" "),t("li",[v._v("空行=cr+lf")]),v._v(" "),t("li",[v._v("实体主体")])])]),v._v(" "),t("li",[v._v("HTTP响应报文\n"),t("ul",[t("li",[v._v("状态行=版本+sp+状态码+sp+短语+cr+lf\n"),t("ul",[t("li",[v._v("HTTP/1.1 200 OK")])])]),v._v(" "),t("li",[v._v("首部行=首部字段名+sp+值+cr+lf\n"),t("ul",[t("li",[v._v("Connection:close")]),v._v(" "),t("li",[v._v("Date:Tue,09 Aug 2011 15:44:04 GMT")]),v._v(" "),t("li",[v._v("Server:Apache/2.2.3 (CentOS)")]),v._v(" "),t("li",[v._v("Last-Modified:Tue,09 Aug 2011 15:11:03 GMT")]),v._v(" "),t("li",[v._v("Content-Length:6821")]),v._v(" "),t("li",[v._v("Content-Type:text/html")])])]),v._v(" "),t("li",[v._v("空行=cr+lf")]),v._v(" "),t("li",[v._v("实体主体")])])])]),v._v(" "),t("h3",{attrs:{id:"http-状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[v._v("#")]),v._v(" http 状态码")]),v._v(" "),t("ul",[t("li",[v._v("101 websocket 双向通信")]),v._v(" "),t("li",[v._v("200 成功")]),v._v(" "),t("li",[v._v("204 没有响应体")]),v._v(" "),t("li",[v._v("206 断点续传")]),v._v(" "),t("li",[v._v("301 永久重定向")]),v._v(" "),t("li",[v._v("302 临时重定向")]),v._v(" "),t("li",[v._v("304 缓存 只能服务端设置")]),v._v(" "),t("li",[v._v("401 没登录没有权限")]),v._v(" "),t("li",[v._v("403 登录后没有权限")]),v._v(" "),t("li",[v._v("404 没有资源")]),v._v(" "),t("li",[v._v("405 请求方法不存在或不支持")]),v._v(" "),t("li",[v._v("502 负载均衡")])]),v._v(" "),t("h3",{attrs:{id:"发送请求的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送请求的方式"}},[v._v("#")]),v._v(" 发送请求的方式")]),v._v(" "),t("ul",[t("li",[v._v("浏览器 默认get请求")]),v._v(" "),t("li",[v._v("postman")]),v._v(" "),t("li",[v._v("命令行 mac curl")])]),v._v(" "),t("h3",{attrs:{id:"管线化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管线化"}},[v._v("#")]),v._v(" 管线化")]),v._v(" "),t("ul",[t("li",[v._v("管线化不需要等待上一次请求得到响应就可以执行下一次请求，实现并行发送请求。只有GET和HEAD请求可以进行管线化，而POST有所限制")])]),v._v(" "),t("h3",{attrs:{id:"请求方法-restfulapi-根据不同的动作-做对应的处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求方法-restfulapi-根据不同的动作-做对应的处理"}},[v._v("#")]),v._v(" 请求方法 RestfulApi 根据不同的动作 做对应的处理")]),v._v(" "),t("ul",[t("li",[v._v("get 获取资源")]),v._v(" "),t("li",[v._v("post 新增资源")]),v._v(" "),t("li",[v._v("put 上传文件 修改(restful)")]),v._v(" "),t("li",[v._v("delete 删除资源")]),v._v(" "),t("li",[v._v("options 跨域出现 复杂请求时出现 仅是get/post都是简单请求 但加上自定义头header就会变成复杂请求")])]),v._v(" "),t("h3",{attrs:{id:"用户与服务器交互：cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户与服务器交互：cookie"}},[v._v("#")]),v._v(" 用户与服务器交互：cookie")]),v._v(" "),t("ul",[t("li",[v._v("cookie组件\n"),t("ul",[t("li",[v._v("在http响应报文中的一个cookie首部行")]),v._v(" "),t("li",[v._v("在http请求报文中的一个cookie首部行")]),v._v(" "),t("li",[v._v("在用户端系统中保留有一个cookie文件，并由用户的浏览器进行管理")]),v._v(" "),t("li",[v._v("位于Web站点的一个后端数据库")])])]),v._v(" "),t("li",[v._v("cookie安全性\n"),t("ul",[t("li",[v._v("cookie 是存放在浏览器上的 服务器可以设置 每次请求时都会带上cookie")]),v._v(" "),t("li",[v._v("cookie 不安全 不能存放敏感信息")]),v._v(" "),t("li",[v._v("session 服务端 (基于cookie) 服务器的内存中，存到redis数据库")])])])]),v._v(" "),t("h3",{attrs:{id:"web缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web缓存"}},[v._v("#")]),v._v(" Web缓存")]),v._v(" "),t("ul",[t("li",[v._v("Web缓存器(Web cache)也叫代理服务器(proxy server)，它能够代表初始web服务器来满足http请求的网络实体")]),v._v(" "),t("li",[v._v("http缓存\n"),t("ul",[t("li",[t("p",[v._v("强制缓存")]),v._v(" "),t("ul",[t("li",[v._v("Cache-Control && Expires")])])]),v._v(" "),t("li",[t("p",[v._v("对比缓存")]),v._v(" "),t("ul",[t("li",[v._v("Last-Modified & If-Modified-Since")]),v._v(" "),t("li",[v._v("ETag & If-None-Match")])])])])]),v._v(" "),t("li",[v._v("Cache-Control\n- private 客户端可以缓存\n- public 客户端和代理服务器都可以缓存\n- max-age=60 缓存内容将在60s后失效\n- no-cache 需要使用对比缓存验证数据，强制向源服务器再次验证(没有强制缓存)\n- no-store 所有内容都不会缓存，强制缓存和对比缓存都不会触发(不缓存)")])]),v._v(" "),t("h3",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[v._v("#")]),v._v(" DNS")]),v._v(" "),t("ul",[t("li",[v._v("DNS是域名解析系统 Domain Name System")]),v._v(" "),t("li",[v._v("DNS工作原理\n"),t("ul",[t("li",[v._v("分布式层次数据库\n"),t("ul",[t("li",[v._v("根DNS服务器")]),v._v(" "),t("li",[v._v("TLD顶级域(DNS)服务器 com org edu")]),v._v(" "),t("li",[v._v("权威DNS服务器")]),v._v(" "),t("li",[v._v("本地DNS服务器与三个服务器的查询关系 从请求主机向本地DNS服务器发出的查询是递归查询，从本地DNS服务器向其他三种服务器查询为迭代查询")])])]),v._v(" "),t("li",[v._v("DNS缓存\n"),t("ul",[t("li",[v._v("在一个请求链中，当DNS服务器缓存了一台主机名/IP地址对，另一个对相同主机名的查询就能够提供所要求的IP地址，本地域名服务器一般会缓存顶级域名服务器的映射")])])])])]),v._v(" "),t("li",[v._v("DNS记录和报文\n"),t("ul",[t("li",[v._v("资源记录(Resource Record,RR)是一个包含了(Name,Value,Type,TTL)的四元组")]),v._v(" "),t("li",[v._v("DNS报文\n"),t("ul",[t("li",[v._v("12字节\n"),t("ul",[t("li",[v._v("标识符")]),v._v(" "),t("li",[v._v("标志")]),v._v(" "),t("li",[v._v("问题数")]),v._v(" "),t("li",[v._v("回答RR数")]),v._v(" "),t("li",[v._v("权威RR数")]),v._v(" "),t("li",[v._v("附加RR数")])])]),v._v(" "),t("li",[v._v("查询的名字和类型自窜\n"),t("ul",[t("li",[v._v("问题(问题的变量数)")])])]),v._v(" "),t("li",[v._v("对查询的响应中的RR\n"),t("ul",[t("li",[v._v("回答(资源记录的变量数)")])])]),v._v(" "),t("li",[v._v("权威服务器的记录\n"),t("ul",[t("li",[v._v("权威(资源记录的变量数)")])])]),v._v(" "),t("li",[v._v('可被使用的附加"有帮助"的信息\n'),t("ul",[t("li",[v._v("附加信息(资源记录的变量数)")])])])])])])]),v._v(" "),t("li",[v._v("DDos攻击\n"),t("ul",[t("li",[v._v("分布式拒绝服务(DDos)带宽洪泛攻击")])])])]),v._v(" "),t("h2",{attrs:{id:"tcp连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接"}},[v._v("#")]),v._v(" TCP连接")]),v._v(" "),t("h3",{attrs:{id:"tcp报文段结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文段结构"}},[v._v("#")]),v._v(" TCP报文段结构")]),v._v(" "),t("ul",[t("li",[v._v("源端口号+目的端口号")]),v._v(" "),t("li",[v._v("序号")]),v._v(" "),t("li",[v._v("确认号")]),v._v(" "),t("li",[v._v("首部长度+保留未用+URG+ACK+PSH+RST+SYN+FIN+接收窗口")]),v._v(" "),t("li",[v._v("因特网校验和+紧急数据指针")]),v._v(" "),t("li",[v._v("选项")]),v._v(" "),t("li",[v._v("数据")])]),v._v(" "),t("h3",{attrs:{id:"tcp连接管理（三次握手）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接管理（三次握手）"}},[v._v("#")]),v._v(" TCP连接管理（三次握手）")]),v._v(" "),t("ul",[t("li",[v._v("第一步：客户端的TCP首先向服务器端的TCP发送一个特殊的TCP报文段")]),v._v(" "),t("li",[v._v("第二步：一旦包含TCP SYN报文段的IP数据报到达服务器主机(假设它的确到达了)，服务器会从该数据包中提取出TCP SYN报文段，为该TCP连接分配TCP缓存和变量，并向该客户TCP发送允许连接的报文段")]),v._v(" "),t("li",[v._v("第三步：在收到SYNACK报文段后，客户也要给该连接分配缓存和变量")])]),v._v(" "),t("h2",{attrs:{id:"ip地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip地址"}},[v._v("#")]),v._v(" IP地址")]),v._v(" "),t("h3",{attrs:{id:"ipv4-vs-ipv6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv4-vs-ipv6"}},[v._v("#")]),v._v(" IPv4 vs IPv6")]),v._v(" "),t("ul",[t("li",[v._v("IPv4数据报格式\n"),t("ul",[t("li",[v._v("版本(0-4)+首部长度(4-8)+服务类型(8-16)+数据报长度(16-31)")]),v._v(" "),t("li",[v._v("16比特标识(0-16)+标志(16-19)+13比特片偏移(19-31)")]),v._v(" "),t("li",[v._v("寿命TTL(0-8)+上层协议(8-16)+首部检验和(16-31)")]),v._v(" "),t("li",[v._v("32比特源IP地址")]),v._v(" "),t("li",[v._v("32比特目的IP地址")]),v._v(" "),t("li",[v._v("选项(如果有的话)")]),v._v(" "),t("li",[v._v("数据")])])]),v._v(" "),t("li",[v._v("IPv6数据报格式\n"),t("ul",[t("li",[v._v("版本(0-4)+流量类型(4-12)+流标签(12-31)")]),v._v(" "),t("li",[v._v("有效载荷长度(0-16)+下一个首部(16-24)+跳限制(24-31)")]),v._v(" "),t("li",[v._v("源地址(128比特)")]),v._v(" "),t("li",[v._v("目的地址(128比特)")]),v._v(" "),t("li",[v._v("数据")])])])]),v._v(" "),t("h3",{attrs:{id:"ipv4编址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv4编址"}},[v._v("#")]),v._v(" IPV4编址")]),v._v(" "),t("ul",[t("li",[v._v("子网：不跨越路由器的路由器接口和主机接口就形成一个子网")]),v._v(" "),t("li",[v._v("子网掩码：IP地址为某个子网分配的一个223.1.1.0/24的地址，这种/24的记法，称为子网掩码(network mask)，指示了32比特中的最左侧24比特定义了子网地址")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[v._v("class")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("NetIDs")]),v._v(" "),t("th",{staticStyle:{"text-align":"right"}},[v._v("Blocks")])])]),v._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("A")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("10")]),v._v(" "),t("td",{staticStyle:{"text-align":"right"}},[v._v("1")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("B")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("172.16-172.31")]),v._v(" "),t("td",{staticStyle:{"text-align":"right"}},[v._v("16")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("C")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("192.168.0-192.168.255")]),v._v(" "),t("td",{staticStyle:{"text-align":"right"}},[v._v("256")])])])]),v._v(" "),t("h2",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[v._v("#")]),v._v(" CDN")]),v._v(" "),t("ul",[t("li",[v._v("CDN操作\n"),t("ul",[t("li",[v._v("当用户主机中的一个浏览器指令检索一个特定的视频(由URL标识)时，CDN必须截获该请求，以便能够确定此时是混合用于该客户的CDN服务器集群以及将客户的请求重定向到该集群的某台服务器")])])]),v._v(" "),t("li",[v._v("集群选择策略\n"),t("ul",[t("li",[v._v("任何CDN部署，其核心是集群选择策略(cluster selection strategy)，即动态地将客户定向到CDN中服务器集群或数据中心的机制。")]),v._v(" "),t("li",[v._v("常见策略：\n"),t("ul",[t("li",[v._v("周期性实时测量；IP任播(客户与CDN服务器匹配)")])])])])])]),v._v(" "),t("h2",{attrs:{id:"网络安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络安全"}},[v._v("#")]),v._v(" 网络安全")]),v._v(" "),t("h3",{attrs:{id:"密码学基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#密码学基础"}},[v._v("#")]),v._v(" 密码学基础")]),v._v(" "),t("ul",[t("li",[v._v("对称密钥密码机制\n"),t("ul",[t("li",[v._v("对称密钥系统(symmetric key system) 双方密钥是相同的并且是秘密的")]),v._v(" "),t("li",[v._v("块密码 将要加密的报文处理成k比特的块\n"),t("ul",[t("li",[v._v("DES(Data Encrypiton Standard) 数据加密标准")]),v._v(" "),t("li",[v._v("AES(Advanced Encryption Standard) 高级加密标准")])])])])]),v._v(" "),t("li",[v._v("公开密钥系统\n"),t("ul",[t("li",[v._v("公开密钥系统(public key system) 使用一对密钥：一个密钥为双方都知道，另一个密钥只有一方知道")]),v._v(" "),t("li",[v._v("RSA算法(Ron、Adi、Leonard三个人名)\n"),t("ul",[t("li",[v._v("大数分解和素性检测")])])])])]),v._v(" "),t("li",[v._v("密码散列函数\n"),t("ul",[t("li",[v._v("MD5散列算法\n"),t("ul",[t("li",[v._v("填充->添加->初始化累加器->循环")])])]),v._v(" "),t("li",[v._v("SHA-1(Security Hash Algorithm)")])])]),v._v(" "),t("li",[v._v("SSL\n"),t("ul",[t("li",[v._v("SSL(Secure Socket Layer) 安全套接字层")]),v._v(" "),t("li",[v._v("SSL握手\n"),t("ul",[t("li",[v._v("1）客户发送它支持的密码算法的列表，连通一个客户的不重数")]),v._v(" "),t("li",[v._v("2）从该列表中服务器选择一种对称算法，一种公钥算法和一种MAC算法，并把选择以及证书和一个服务器不重数返回给客户")]),v._v(" "),t("li",[v._v("3）客户验证该证书，提取服务器公钥，生成一个前主密钥(Pre-Master Secret)，用服务器的公钥加密该前主密钥，并将加密的PMS发送给服务器")]),v._v(" "),t("li",[v._v("4）使用相同的密钥导出函数，客户和服务器独立地从PMS和不重数中计算主密钥(Master Secret)，将该MS切片申城两个密码和两个MAC密钥")]),v._v(" "),t("li",[v._v("5）客户发送所有握手报文的一个MAC")]),v._v(" "),t("li",[v._v("6）服务器发送所有握手报文的一个MAC")])])])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);