(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{258:function(t,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端需要了解的rtmp知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端需要了解的rtmp知识"}},[t._v("#")]),t._v(" 前端需要了解的RTMP知识")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("RTMP是Real Time Messaging Protocol的简称，是基于何时的传输层协议上(如tcp协议)的应用层级别的协议，其设计是为了组包多媒体传输流(如视频，音频以及交互内容)")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("RTMP协议是由Adobe公司提出的一种应用层的协议，上面引述的是"),a("a",{attrs:{href:"http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/rtmp/pdf/rtmp_specification_1.0.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("RTMP官方文档"),a("OutboundLink")],1),t._v("的introduction部分，其目的是为了给诸如视频、音频以及数据消息通信双方提供实时的信息双向流。RTMP在实现上对不同类型的消息实施不同的权重，这样可以实现对当传输量受限时的底层流传输消息进行排队。")]),t._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("载荷(Payload)：包含在包中的数据")])]),t._v(" "),a("li",[a("p",[t._v("包(Packet)：数据包由固定头和载荷数据组成，一些底层协议可能需要对被定义包进行封装")])]),t._v(" "),a("li",[a("p",[t._v("端口(Port)：TCP/IP端口，由主机号来区分多地址")])]),t._v(" "),a("li",[a("p",[t._v("传输地址(Transport address)：网络地址和端口的组合")])]),t._v(" "),a("li",[a("p",[t._v("消息流(Message stream)：消息流通信的逻辑频道")])]),t._v(" "),a("li",[a("p",[t._v("消息流ID(Message stream ID)：每个消息都有一个预期消息流匹配的id")])]),t._v(" "),a("li",[a("p",[t._v("块(Chunk)：消息片段。消息在被网络传输前会被分成小的部分，所有的消息会通过多路由时间序端对端传输")])]),t._v(" "),a("li",[a("p",[t._v("块流(Chunk stream)：通信的逻辑频道允许块以某一特定方向传送，块流可以从客户端传到服务端，也可以从服务端传回客户端")])]),t._v(" "),a("li",[a("p",[t._v("块流ID(Chunk stream ID)：每个块流都有一个与之匹配的id")])]),t._v(" "),a("li",[a("p",[t._v("多路复用(Multiplexing)：分离的音视频数据可以连续播放的过程，使得音视频可以同时传送")])]),t._v(" "),a("li",[a("p",[t._v("多路分用(DeMultiplexing)：多路复用的逆过程，可以将交错的音视频数据聚集成原始的音视频数据")])]),t._v(" "),a("li",[a("p",[t._v("远程过程调用(Remote Procedure Call)：允许客户端或服务端可以调用另一端服务端或客户端子程序或子进程的请求")])]),t._v(" "),a("li",[a("p",[t._v("元数据(Metadata)：数据的描述。电影的元数据包括电影标题，时长，上映日期等等。")])]),t._v(" "),a("li",[a("p",[t._v("应用实例(Application Instance)：客户端可以连接并发送连接请求的服务端实例")])]),t._v(" "),a("li",[a("p",[t._v("动作消息格式(Action Message Format)：用来序列化AS(ActionScript 动作脚本)实例对象(object graphs)的压缩的二进制格式，有AMF0和AMF3两种版本")])])]),t._v(" "),a("h2",{attrs:{id:"字节序-对齐-时间格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字节序-对齐-时间格式"}},[t._v("#")]),t._v(" 字节序 & 对齐 & 时间格式")]),t._v(" "),a("p",[t._v("所有的整字段以字节序来传输，并且是大端排列，不做特殊说明均为十进制。时间戳以毫秒记，从0开始，32位长；时间间隔用毫秒的无符号整数表示，可能是24或32位长度")]),t._v(" "),a("h2",{attrs:{id:"rtmp块流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtmp块流"}},[t._v("#")]),t._v(" RTMP块流")]),t._v(" "),a("p",[t._v("尽管RTMP是被设计用来实时传输消息的，但它也可以用来处理任何消息。RTMP非常适合用于大量的音视频应用，虽然并不会提供任何优化，但却被用于更高级别的协议来进行优化，例如直播视频服务器可能会选择在客户端网速较慢的情况下丢弃视频消息而保证音频消息的实时到达。")]),t._v(" "),a("h3",{attrs:{id:"消息格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息格式"}},[t._v("#")]),t._v(" 消息格式")]),t._v(" "),a("p",[t._v("消息格式可被分成许多块来提供多路复用，这些消息需要包括含以下字段：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("大小")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("时间戳(Timestamp)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息的时间戳")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("长度(Length)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息载荷的长度，如果消息头不能被省略，需要包含长度")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("类型ID(Type ID)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型id被用于消息控制")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("消息流ID(Message Stream ID)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("任意数值，小端存储")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4字节")])])])]),t._v(" "),a("h3",{attrs:{id:"握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#握手"}},[t._v("#")]),t._v(" 握手")]),t._v(" "),a("p",[t._v("RTMP握手不同于其他协议，它包含3个固定大小的块而不是可变大小的块")]),t._v(" "),a("h4",{attrs:{id:"握手次序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#握手次序"}},[t._v("#")]),t._v(" 握手次序")]),t._v(" "),a("p",[t._v("开始时，客户端发送C0和C1")]),t._v(" "),a("p",[t._v("客户端必须在收到S1才能发送C2，收到S2才能发送任何其他数据")]),t._v(" "),a("p",[t._v("服务端必须等到收到C0才能发送S0和S1，并且最好能在收到C1后。服务端等到收到C1才能发送S2，服务端必须等到收到C2才能发送其他数据")]),t._v(" "),a("h4",{attrs:{id:"c0-s0-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c0-s0-格式"}},[t._v("#")]),t._v(" C0 & S0 格式")]),t._v(" "),a("p",[t._v("C0和S0是一个8位组，被认为是一个8位整数段。对C0而言，这个字段被认为是客户端RTMP请求的版本；对S0而言，这个字段被认为是服务端选择的RTMP版本。默认是3，0-2被废弃，4-31被用于未来的版本，32-255没有被允许")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0 1 2 3 4 5 6 7\n+-+-+-+-+-+-+-+-+\n|   version     |\n+-+-+-+-+-+-+-+-+\n")])])]),a("h4",{attrs:{id:"c1-s1-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c1-s1-格式"}},[t._v("#")]),t._v(" C1 & S1 格式")]),t._v(" "),a("p",[t._v("C1和S1是一个1536位的长度组，包含如下字段：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("大小")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("时间(Time)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("包含时间戳，可能是0也可能是任意的数值，用于时间标识")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("零(Zero)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("必须都是0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("任意数据(Random data)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("任意数值，并不需要加密")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1528字节")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        time (4 bytes)                         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        zero (4 bytes)                         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                         random bytes                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                         random bytes                          |\n|                             (cont)                            |\n|                              ....                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")])])]),a("h4",{attrs:{id:"c2-s2-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c2-s2-格式"}},[t._v("#")]),t._v(" C2 & S2 格式")]),t._v(" "),a("p",[t._v("C2和S2是一个1536位的长度组，对应S1和C1依次的回复，包含如下字段：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("大小")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("时间1(Time1)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("时间戳，S1(C2发送)或C1(S2发送)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("时间2(Time2)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("时间戳，之前S1或C1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("任意数据(Random data)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("任意数值，可快速验证连接带宽或延时")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1528字节")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        time (4 bytes)                         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        time2 (4 bytes)                        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                         random bytes                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                         random bytes                          |\n|                             (cont)                            |\n|                              ....                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")])])]),a("h4",{attrs:{id:"握手简图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#握手简图"}},[t._v("#")]),t._v(" 握手简图")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("未初始化阶段(Uninitialized)：协议版本在这个阶段发送，客户端和服务端都是未初始化的。客户端在C0包中发送协议版本，如果服务端支持这个协议版本，其将会对应发送S0和S1；如果服务端不支持，服务端会采取合适的动作。在RTMP中，这个动作是中止连接。")])]),t._v(" "),a("li",[a("p",[t._v("版本发送阶段(Version Sent)：在未初始化阶段之后客户端和服务端都处于版本发送阶段。客户端处于等待S1包，服务端处于等待C1包。在收到相应的等待的包后，客户端发送C2而服务端会发送S2，然后进入确认发送阶段。")])]),t._v(" "),a("li",[a("p",[t._v("确认发送阶段(Ack Sent)：客户端和服务端响应的等待S2和C2")])]),t._v(" "),a("li",[a("p",[t._v("握手结束阶段(Handshake Done)：客户端和服务端交换消息")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+---------------+                             +---------------+\n|    Client     |        TCP/IP Network       |    Server     |   \n+---------------+              |              +---------------+\n        |                      |                      |\n  Uninitialized                |                 Uninitialized\n        |          C0          |                      |\n        | -------------------\x3e |          C0          |\n        |                      | -------------------\x3e |\n        |          C1          |                      | \n        | -------------------\x3e |          S0          |\n        |                      | <------------------- |\n        |                      |          S1          |\n   Version sent                | <------------------- |\n        |          S0          |                      |\n        | <------------------- |                      |\n        |          S1          |                      |\n        | <------------------- |                 Version sent\n        |                      |          C1          |\n        |                      | -------------------\x3e |\n        |          C2          |                      |\n        | -------------------\x3e |          S2          |\n        |                      | <------------------- |\n     Ack sent                  |                    Ack sent\n        |          S2          |                      |\n        | <------------------- |                      |\n        |                      |          C2          |\n        |                      | -------------------\x3e |\n  Handshake Done               |                Handshake Done\n        |                      |                      |\n")])])]),a("h3",{attrs:{id:"分块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分块"}},[t._v("#")]),t._v(" 分块")]),t._v(" "),a("p",[t._v("握手之后，连接便可以进行多路传输块流，每个块携带着一种信息流的一种类型，每块流都有一个独一无二的id即块流id，通过网络传输，每个块必须满载，在接收端会根据id进行重新组装。分块允许通过更高阶的协议进行小信息的分拆，比如可以通过阻止大的低优先级消息（如视频）而阻塞小的高优先级消息（如音频或控制）。分块同样也允许更少的间接消耗将小的消息进行发送，比如块头包含有代表内容的压缩信息，也可能反过来包含在信息之中。块的大小是可配置的，大的块可减少CPU使用，但是却可能由于较多的写操作而带来其他内容低带宽的延迟，小的块不适合高比特流的传输，块的大小在每个方向上独立保持。")]),t._v(" "),a("h4",{attrs:{id:"块格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块格式"}},[t._v("#")]),t._v(" 块格式")]),t._v(" "),a("p",[t._v("每个块包含头和数据，头包含三部分：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("大小")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("基础头(Basic Header)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("块流id和块类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1或3字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("消息头(Message Header)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息的主要内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0，3，7或11字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("扩展时间戳(Extended Timestamp)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("某种情境下的时间戳")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0或4字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("块数据(Chunk Data)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("块的载荷")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可变字节")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+---------------+----------------+--------------------+----------------+\n|  Basic Header | Message Header | Extended Timestamp |   Chunk Data   |\n+---------------+----------------+--------------------+----------------+\n|                                                     |\n| <------------------ Chunk Header -----------------\x3e |\n                              Chunk Format\n")])])]),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("1.块基本头")])])],1),t._v(" "),a("p",[t._v("有三种类型：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("大小")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("块流id(cs id)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数值2~63")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("格式(fmt)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("格式标识")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("块流id-64(cs id - 64)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数值减去64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8或16位")])])])]),t._v(" "),a("p",[t._v("块基础头1：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0 1 2 3 4 5 6 7\n+-+-+-+-+-+-+-+-+\n|fmt|   cs id   |\n+-+-+-+-+-+-+-+-+\n")])])]),a("p",[t._v("块基础头2：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0                   1\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|fmt|     0     |   cs id - 64  |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")])])]),a("p",[t._v("块基础头3：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0                   1                   2\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|fmt|     1     |           cs id - 64          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")])])]),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("2.块消息头")])])],1),t._v(" "),a("p",[t._v("有四种类型：")]),t._v(" "),a("p",[t._v("Type 0：11字节")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                   timestamp                   | message length|\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|   message length (cont)       |message type id| msg stream id |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|            message stream id (cont)           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n                 Chunk Message Header - Type 0\n")])])]),a("p",[t._v("Type 1：7字节")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|              timestamp delta                  | message length|\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|   message length (cont)       |message type id| \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n                 Chunk Message Header - Type 1\n")])])]),a("p",[t._v("Type 2：3字节")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 0                   1                   2      \n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|              timestamp delta                  |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n         Chunk Message Header - Type 2\n")])])]),a("p",[t._v("Type 3：没有头")]),t._v(" "),a("p",[t._v("公共头字段：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("大小")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("事件戳间隔(timestamp delta)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型1或类型2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("消息长度(message length)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型0或类型1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("消息类型id(message type id)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型0或类型1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("消息流id(message stream id)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4字节")])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("3.扩展时间戳")])])],1),t._v(" "),a("p",[t._v("当时间戳大于 16777215（0xFFFFFF）时使用")]),t._v(" "),a("h3",{attrs:{id:"协议控制消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议控制消息"}},[t._v("#")]),t._v(" 协议控制消息")]),t._v(" "),a("p",[t._v("消息类型ID为1，2，3，5，6是协议控制消息，这些内容需要块流协议做基础")]),t._v(" "),a("h4",{attrs:{id:"设置块大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置块大小"}},[t._v("#")]),t._v(" 设置块大小")]),t._v(" "),a("p",[t._v("用于提示设置最大字节，最大128字节，服务端和客户端可以修改这个值，并升级另一端的大小")]),t._v(" "),a("h4",{attrs:{id:"中止消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中止消息"}},[t._v("#")]),t._v(" 中止消息")]),t._v(" "),a("p",[t._v("用于提示等待完成消息，之后丢弃部分接收的消息")]),t._v(" "),a("h4",{attrs:{id:"识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#识别"}},[t._v("#")]),t._v(" 识别")]),t._v(" "),a("p",[t._v("当接收字节和视窗大小相同时，客户端或服务端必须发送给对应端确认消息")]),t._v(" "),a("h4",{attrs:{id:"视窗识别大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视窗识别大小"}},[t._v("#")]),t._v(" 视窗识别大小")]),t._v(" "),a("p",[t._v("当进行确认时，客户端或服务端发送给对应端视窗大小")]),t._v(" "),a("h4",{attrs:{id:"设置端带宽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置端带宽"}},[t._v("#")]),t._v(" 设置端带宽")]),t._v(" "),a("p",[t._v("客户端和服务端向对应端发送输出限制")]),t._v(" "),a("h2",{attrs:{id:"rtmp消息格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtmp消息格式"}},[t._v("#")]),t._v(" RTMP消息格式")]),t._v(" "),a("p",[t._v("RTMP可用各种传输层协议")]),t._v(" "),a("h3",{attrs:{id:"rtmp消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtmp消息"}},[t._v("#")]),t._v(" RTMP消息")]),t._v(" "),a("p",[t._v("消息可以包含音频，视频，数据以及其他消息格式")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("1.消息头")])])],1),t._v(" "),a("p",[t._v("包含消息类型，长度，时间戳，消息流id")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("2.消息载荷")])])],1),t._v(" "),a("p",[t._v("实际消息承载内容")]),t._v(" "),a("h3",{attrs:{id:"用户控制消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户控制消息"}},[t._v("#")]),t._v(" 用户控制消息")]),t._v(" "),a("p",[t._v("消息类型为4")]),t._v(" "),a("h2",{attrs:{id:"rtmp命令消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtmp命令消息"}},[t._v("#")]),t._v(" RTMP命令消息")]),t._v(" "),a("p",[t._v("客户端和服务端的消息相互操作")]),t._v(" "),a("h3",{attrs:{id:"消息类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息类型"}},[t._v("#")]),t._v(" 消息类型")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("1.命令消息")])])],1),t._v(" "),a("p",[t._v("AMF0格式值为20 AMF3格式值为17")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("2.数据消息")])])],1),t._v(" "),a("p",[t._v("AMF0格式值为18 AMF3格式值为15")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("3.共享对象消息")])])],1),t._v(" "),a("p",[t._v("AMF0格式值为19 AMF3格式值为16")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("4.音频消息")])])],1),t._v(" "),a("p",[t._v("值为8")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("5.视频消息")])])],1),t._v(" "),a("p",[t._v("值为9")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("6.聚合消息")])])],1),t._v(" "),a("p",[t._v("值为22")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("7.用户控制消息事件")])])],1),t._v(" "),a("h3",{attrs:{id:"命令类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令类型"}},[t._v("#")]),t._v(" 命令类型")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("1.网络连接命令")])])],1),t._v(" "),a("p",[t._v("连接 调用 创建流")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("font",{attrs:{color:"#3eaf7c"}},[a("strong",[t._v("2.网络流命令")])])],1),t._v(" "),a("p",[t._v("播放 播放2 删除流 接收音频 接收视频 发布 寻址 暂停")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/rtmp/pdf/rtmp_specification_1.0.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("RTMP官方文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010519573",target:"_blank",rel:"noopener noreferrer"}},[t._v("RTMP H5 直播流技术解析"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/b2144f9bbe28",target:"_blank",rel:"noopener noreferrer"}},[t._v("带你吃透RTMP"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.villainhr.com/page/2017/03/31/%E5%85%A8%E9%9D%A2%E8%BF%9B%E9%98%B6%20H5%20%E7%9B%B4%E6%92%AD#Media%20Source%20Extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("全面进阶H5直播"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009097543",target:"_blank",rel:"noopener noreferrer"}},[t._v("web 直播流的解析"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010776938",target:"_blank",rel:"noopener noreferrer"}},[t._v("学好 MP4，让直播更给力"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000011327421",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于音视频测试的一点建议"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010440054",target:"_blank",rel:"noopener noreferrer"}},[t._v("不再碎片化学习，快速掌握 H5 直播技术"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000008416360",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebRTC 点对点直播"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5bd87278e51d452ab832be7e",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx-RTMP推流（video）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/Daniel_Leung/article/details/85726944",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web网页播放器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://videojs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Videojs"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Bilibili/flv.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flv.js"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.mediaelementjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MediaElement.js"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://h5player.bytedance.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://h5player.bytedance.com"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/flqbestboy/article/details/78123910",target:"_blank",rel:"noopener noreferrer"}},[t._v("流媒体"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/p/1210000012859007/read",target:"_blank",rel:"noopener noreferrer"}},[t._v("从零开始写一个 Web 视频播放器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Media_Source_Extensions_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Media Source Extensions API"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebRTC API"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("ArrayBuffer"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);