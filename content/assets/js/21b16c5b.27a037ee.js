"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[56029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55350:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},i=void 0,l={unversionedId:"query_engine_setup",id:"version-0.10.1/query_engine_setup",title:"Query Engine Setup",description:"Spark",source:"@site/versioned_docs/version-0.10.1/query_engine_setup.md",sourceDirName:".",slug:"/query_engine_setup",permalink:"/docs/0.10.1/query_engine_setup",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/query_engine_setup.md",tags:[],version:"0.10.1",frontMatter:{title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},sidebar:"version-0.10.1/docs",previous:{title:"Configurations",permalink:"/docs/0.10.1/configurations"},next:{title:"Performance",permalink:"/docs/0.10.1/performance"}},s=[{value:"Spark",id:"spark",children:[],level:2},{value:"PrestoDB",id:"prestodb",children:[{value:"Presto Environment",id:"presto-environment",children:[],level:3},{value:"Query",id:"query",children:[],level:3}],level:2},{value:"Trino",id:"trino",children:[],level:2},{value:"Hive",id:"hive",children:[],level:2},{value:"StarRocks",id:"starrocks",children:[],level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"spark"},"Spark"),(0,a.kt)("p",null,"The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"spark.read.parquet"),".\nSee the ",(0,a.kt)("a",{parentName:"p",href:"/docs/quick-start-guide"},"Spark Quick Start")," for more examples of Spark datasource reading queries."),(0,a.kt)("p",null,"If your Spark environment does not have the Hudi jars installed, add ",(0,a.kt)("inlineCode",{parentName:"p"},"--jars <path to jar>/hudi-spark-bundle_2.11-<hudi version>.jar")," to the classpath of drivers\nand executors. Alternatively, hudi-spark-bundle can also fetched via the ",(0,a.kt)("inlineCode",{parentName:"p"},"--packages")," options (e.g: ",(0,a.kt)("inlineCode",{parentName:"p"},"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3"),")."),(0,a.kt)("h2",{id:"prestodb"},"PrestoDB"),(0,a.kt)("p",null,"PrestoDB is a popular query engine, providing interactive query performance. PrestoDB currently supports snapshot querying on COPY_ON_WRITE tables.\nBoth snapshot and read optimized queries are supported on MERGE_ON_READ Hudi tables. Since PrestoDB-Hudi integration has evolved over time, the installation\ninstructions for PrestoDB would vary based on versions. Please check the below table for query types supported and installation instructions\nfor different versions of PrestoDB."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"PrestoDB Version")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Installation description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Query types supported")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"< 0.233"),(0,a.kt)("td",{parentName:"tr",align:null},"Requires the ",(0,a.kt)("inlineCode",{parentName:"td"},"hudi-presto-bundle")," jar to be placed into ",(0,a.kt)("inlineCode",{parentName:"td"},"<presto_install>/plugin/hive-hadoop2/"),", across the installation."),(0,a.kt)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 0.233"),(0,a.kt)("td",{parentName:"tr",align:null},"No action needed. Hudi (0.5.1-incubating) is a compile time dependency."),(0,a.kt)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">= 0.240"),(0,a.kt)("td",{parentName:"tr",align:null},"No action needed. Hudi 0.5.3 version is a compile time dependency."),(0,a.kt)("td",{parentName:"tr",align:null},"Snapshot querying on both COW and MOR tables")))),(0,a.kt)("h3",{id:"presto-environment"},"Presto Environment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure Presto according to the ",(0,a.kt)("a",{parentName:"li",href:"https://prestodb.io/docs/current/installation/deployment.html"},"Presto configuration document"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure hive catalog in ",(0,a.kt)("inlineCode",{parentName:"li"}," /presto-server-0.2xxx/etc/catalog/hive.properties")," as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"connector.name=hive-hadoop2\nhive.metastore.uri=thrift://xxx.xxx.xxx.xxx:9083\nhive.config.resources=.../hadoop-2.x/etc/hadoop/core-site.xml,.../hadoop-2.x/etc/hadoop/hdfs-site.xml\n")),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,"Beginning query by connecting hive metastore with presto client. The presto client connection command is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# The presto client connection command\n./presto --server xxx.xxx.xxx.xxx:9999 --catalog hive --schema default\n")),(0,a.kt)("h2",{id:"trino"},"Trino"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://trino.io/"},"Trino")," (formerly PrestoSQL) was forked off of PrestoDB a few years ago. Hudi supports 'Snapshot' queries for Copy-On-Write tables and 'Read Optimized' queries\nfor Merge-On-Read tables. This is through the initial input format based integration in PrestoDB (pre forking). This approach has\nknown performance limitations with very large tables, which has been since fixed on PrestoDB. We are working on replicating the same fixes on Trino as well."))),(0,a.kt)("p",null,"To query Hudi tables on Trino, please place the ",(0,a.kt)("inlineCode",{parentName:"p"},"hudi-trino-bundle")," jar into the Hive connector installation ",(0,a.kt)("inlineCode",{parentName:"p"},"<trino_install>/plugin/hive-hadoop2"),"."),(0,a.kt)("h2",{id:"hive"},"Hive"),(0,a.kt)("p",null,"In order for Hive to recognize Hudi tables and query correctly,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the HiveServer2 needs to be provided with the ",(0,a.kt)("inlineCode",{parentName:"li"},"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar")," in its ",(0,a.kt)("a",{parentName:"li",href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf#concept_nc3_mms_lr"},"aux jars path"),". This will ensure the input format\nclasses with its dependencies are available for query planning & execution."),(0,a.kt)("li",{parentName:"ul"},"For MERGE_ON_READ tables, additionally the bundle needs to be put on the hadoop/hive installation across the cluster, so that queries can pick up the custom RecordReader as well.")),(0,a.kt)("p",null,"In addition to setup above, for beeline cli access, the ",(0,a.kt)("inlineCode",{parentName:"p"},"hive.input.format")," variable needs to be set to the fully qualified path name of the\ninputformat ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.hadoop.HoodieParquetInputFormat"),". For Tez, additionally the ",(0,a.kt)("inlineCode",{parentName:"p"},"hive.tez.input.format")," needs to be set\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.hive.ql.io.HiveInputFormat"),". Then proceed to query the table like any other Hive table."),(0,a.kt)("h2",{id:"starrocks"},"StarRocks"),(0,a.kt)("p",null,"Copy on Write tables in Apache Hudi 0.10.0 and above can be queried via StarRocks external tables from StarRocks version 2.2.0.\nOnly snapshot queries are supported currently. In future releases Merge on Read tables will also be supported.\nPlease refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.starrocks.com/en-us/2.2/using_starrocks/External_table#hudi-external-table"},"StarRocks Hudi external table"),"\nfor more details on the setup."))}d.isMDXComponent=!0}}]);