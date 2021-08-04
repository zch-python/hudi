"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7109],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5008:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Optimize Data lake layout using Clustering in Apache Hudi",excerpt:"Introduce clustering feature to change data layout",author:"satish.kotha",category:"blog"},s="Background",u={permalink:"/blog/2021/01/27/hudi-clustering-intro",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-01-27-hudi-clustering-intro.md",source:"@site/blog/2021-01-27-hudi-clustering-intro.md",title:"Optimize Data lake layout using Clustering in Apache Hudi",description:"Apache Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing. In a data lake/warehouse, one of the key trade-offs is between ingestion speed and query performance. Data ingestion typically prefers small files to improve parallelism and make data available to queries as soon as possible. However, query performance degrades poorly with a lot of small files. Also, during ingestion, data is typically co-located based on arrival time. However, the query engines perform better when the data frequently queried is co-located together. In most architectures each of these systems tend to add optimizations independently to improve performance which hits limitations due to un-optimized data layouts. This blog introduces a new kind of table service called clustering [RFC-19] to reorganize data for improved query performance without compromising on ingestion speed.",date:"2021-01-27T00:00:00.000Z",formattedDate:"January 27, 2021",tags:[],readingTime:5.695,truncated:!0,prevItem:{title:"Apache Hudi Key Generators",permalink:"/blog/2021/02/13/hudi-key-generators"},nextItem:{title:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",permalink:"/blog/2020/12/01/high-perf-data-lake-with-hudi-and-alluxio-t3go"}},c=[{value:"Overall, there are 2 parts to clustering",id:"overall-there-are-2-parts-to-clustering",children:[]},{value:"Scheduling clustering",id:"scheduling-clustering",children:[]},{value:"Running clustering",id:"running-clustering",children:[]},{value:"Setting up clustering",id:"setting-up-clustering",children:[]},{value:"Before Clustering",id:"before-clustering",children:[]},{value:"After Clustering",id:"after-clustering",children:[]}],p={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing. In a data lake/warehouse, one of the key trade-offs is between ingestion speed and query performance. Data ingestion typically prefers small files to improve parallelism and make data available to queries as soon as possible. However, query performance degrades poorly with a lot of small files. Also, during ingestion, data is typically co-located based on arrival time. However, the query engines perform better when the data frequently queried is co-located together. In most architectures each of these systems tend to add optimizations independently to improve performance which hits limitations due to un-optimized data layouts. This blog introduces a new kind of table service called clustering ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance"},"[RFC-19]")," to reorganize data for improved query performance without compromising on ingestion speed."),(0,i.kt)("h1",{id:"clustering-architecture"},"Clustering Architecture"),(0,i.kt)("p",null,"At a high level, Hudi provides different operations such as insert/upsert/bulk_insert through it\u2019s write client API to be able to write data to a Hudi table. To be able to choose a trade-off between file size and ingestion speed, Hudi provides a knob ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.parquet.small.file.limit")," to be able to configure the smallest allowable file size. Users are able to configure the small file ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#compactionSmallFileSize"},"soft limit")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to force new data to go into a new set of filegroups or set it to a higher value to ensure new data gets \u201cpadded\u201d to existing files until it meets that limit that adds to ingestion latencies."),(0,i.kt)("p",null,"To be able to support an architecture that allows for fast ingestion without compromising query performance, we have introduced a \u2018clustering\u2019 service to rewrite the data to optimize Hudi data lake file layout."),(0,i.kt)("p",null,"Clustering table service can run asynchronously or synchronously adding a new action type called \u201cREPLACE\u201d, that will mark the clustering action in the Hudi metadata timeline."),(0,i.kt)("h3",{id:"overall-there-are-2-parts-to-clustering"},"Overall, there are 2 parts to clustering"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Scheduling clustering: Create a clustering plan using a pluggable clustering strategy."),(0,i.kt)("li",{parentName:"ol"},"Execute clustering: Process the plan using an execution strategy to create new files and replace old files.")),(0,i.kt)("h3",{id:"scheduling-clustering"},"Scheduling clustering"),(0,i.kt)("p",null,"Following steps are followed to schedule clustering."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify files that are eligible for clustering: Depending on the clustering strategy chosen, the scheduling logic will identify the files eligible for clustering."),(0,i.kt)("li",{parentName:"ol"},"Group files that are eligible for clustering based on specific criteria. Each group is expected to have data size in multiples of \u2018targetFileSize\u2019. Grouping is done as part of \u2018strategy\u2019 defined in the plan. Additionally, there is an option to put a cap on group size to improve parallelism and avoid shuffling large amounts of data."),(0,i.kt)("li",{parentName:"ol"},"Finally, the clustering plan is saved to the timeline in an avro ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/avro/HoodieClusteringPlan.avsc"},"metadata format"),".")),(0,i.kt)("h3",{id:"running-clustering"},"Running clustering"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read the clustering plan and get the \u2018clusteringGroups\u2019 that mark the file groups that need to be clustered."),(0,i.kt)("li",{parentName:"ol"},"For each group, we instantiate appropriate strategy class with strategyParams (example: sortColumns) and apply that strategy to rewrite the data."),(0,i.kt)("li",{parentName:"ol"},"Create a \u201cREPLACE\u201d commit and update the metadata in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieReplaceCommitMetadata.java"},"HoodieReplaceCommitMetadata"),".")),(0,i.kt)("p",null,"Clustering Service builds on Hudi\u2019s MVCC based design to allow for writers to continue to insert new data while clustering action runs in the background to reformat data layout, ensuring snapshot isolation between concurrent readers and writers."),(0,i.kt)("p",null,"NOTE: Clustering can only be scheduled for tables / partitions not receiving any concurrent updates. In the future, concurrent updates use-case will be supported as well."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clustering example",src:a(7038).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure: Illustrating query performance improvements by clustering")),(0,i.kt)("h3",{id:"setting-up-clustering"},"Setting up clustering"),(0,i.kt)("p",null,"Inline clustering can be setup easily using spark dataframe options. See sample below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\n\nval df =  //generate data frame\ndf.write.format("org.apache.hudi").\n        options(getQuickstartWriteConfigs).\n        option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n        option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n        option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n        option(TABLE_NAME, "tableName").\n        option("hoodie.parquet.small.file.limit", "0").\n        option("hoodie.clustering.inline", "true").\n        option("hoodie.clustering.inline.max.commits", "4").\n        option("hoodie.clustering.plan.strategy.target.file.max.bytes", "1073741824").\n        option("hoodie.clustering.plan.strategy.small.file.limit", "629145600").\n        option("hoodie.clustering.plan.strategy.sort.columns", "column1,column2"). //optional, if sorting is needed as part of rewriting data\n        mode(Append).\n        save("dfs://location");\n')),(0,i.kt)("p",null,"For more advanced usecases, async clustering pipeline can also be setup. See an example ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob"},"here"),"."),(0,i.kt)("h1",{id:"table-query-performance"},"Table Query Performance"),(0,i.kt)("p",null,"We created a dataset from one partition of a known production style table with ~20M records and on-disk size of ~200GB. The dataset has rows for multiple \u201csessions\u201d. Users always query this data using a predicate on session. Data for a single session is spread across multiple data files because ingestion groups data based on arrival time. The below experiment shows that by clustering on session, we are able to improve the data locality and reduce query execution time by more than 50%."),(0,i.kt)("p",null,"Query: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'spark.sql("select  *  from table where session_id=123")\n')),(0,i.kt)("h2",{id:"before-clustering"},"Before Clustering"),(0,i.kt)("p",null,"Query took 2.2 minutes to complete. Note that the number of output rows in the \u201cscan parquet\u201d part of the query plan includes all 20M rows in the table."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Query Plan Before Clustering",src:a(764).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure: Spark SQL query details before clustering")),(0,i.kt)("h2",{id:"after-clustering"},"After Clustering"),(0,i.kt)("p",null,"The query plan is similar to above. But, because of improved data locality and predicate push down, spark is able to prune a lot of rows. After clustering, the same query only outputs 110K rows (out of 20M rows) while scanning parquet files. This cuts query time to less than a minute from 2.2 minutes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Query Plan Before Clustering",src:a(1822).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure: Spark SQL query details after clustering")),(0,i.kt)("p",null,"The table below summarizes query performance improvements from experiments run using Spark3"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Table State"),(0,i.kt)("th",{parentName:"tr",align:null},"Query runtime"),(0,i.kt)("th",{parentName:"tr",align:null},"Num Records Processed"),(0,i.kt)("th",{parentName:"tr",align:null},"Num files on disk"),(0,i.kt)("th",{parentName:"tr",align:null},"Size of each file"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Unclustered")),(0,i.kt)("td",{parentName:"tr",align:null},"130,673 ms"),(0,i.kt)("td",{parentName:"tr",align:null},"~20M"),(0,i.kt)("td",{parentName:"tr",align:null},"13642"),(0,i.kt)("td",{parentName:"tr",align:null},"~150 MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Clustered")),(0,i.kt)("td",{parentName:"tr",align:null},"55,963 ms"),(0,i.kt)("td",{parentName:"tr",align:null},"~110K"),(0,i.kt)("td",{parentName:"tr",align:null},"294"),(0,i.kt)("td",{parentName:"tr",align:null},"~600 MB")))),(0,i.kt)("p",null,"Query runtime is reduced by 60% after clustering. Similar results were observed on other sample datasets. See example query plans and more details at the ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-PerformanceEvaluation"},"RFC-19 performance evaluation"),"."),(0,i.kt)("p",null,"We expect dramatic speedup for large tables, where the query runtime is almost entirely dominated by actual I/O and not query planning, unlike the example above."),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Using clustering, we can improve query performance by"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Leveraging concepts such as ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Z-order_curve"},"space filling curves")," to adapt data lake layout and reduce the amount of data read during queries."),(0,i.kt)("li",{parentName:"ol"},"Stitch small files into larger ones and reduce the total number of files that need to be scanned by the query engine.")),(0,i.kt)("p",null,"Clustering also enables stream processing over big data. Ingestion can write small files to satisfy latency requirements of stream processing. Clustering can be used in the background to stitch these small files into larger files and reduce file count."),(0,i.kt)("p",null,"Besides this, the clustering framework also provides the flexibility to asynchronously rewrite data based on specific requirements. We foresee many other use-cases adopting clustering framework with custom pluggable strategies to satisfy on-demand data lake management activities. Some such notable use-cases that are actively being solved using clustering:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rewrite data and encrypt data at rest."),(0,i.kt)("li",{parentName:"ol"},"Prune unused columns from tables and reduce storage footprint.")))}d.isMDXComponent=!0},1822:function(e,t,a){t.Z=a.p+"assets/images/Query_Plan_After_Clustering-e669cd3887eaadb0f9d23cd4a773535e.png"},764:function(e,t,a){t.Z=a.p+"assets/images/Query_Plan_Before_Clustering-cbf67c7e66765c7b42ad88521739d39f.png"},7038:function(e,t,a){t.Z=a.p+"assets/images/example_perf_improvement-0eaeaa2d62ff5684c0d3769446388660.png"}}]);