---
title: IoT Data Modeling in Neo4j Graph DB
date: 2018-05-19
tags: [neo4j]
path: IoT-Data-Modeling-in-Neo4j-Graph-DB
cover: ./preview.png
excerpt: Model Graph database in Neo4j to implement IoT device metadata.
author: "Muntasir Joarder"
---

Graph data modeling is the process of defining data as a connected graph  where data is represented as nodes and edges. In the case of a graph  database, the data gets stored as a graph (ie as nodes and edges) and  then queried as graph pattern. Neo4j is a Graph Database which organizes data as graph structure and is designed to answer questions in the form of Cypher query language which is a SQL like a graph query language.

IoT is all about Things and data. The data is not only the data it is  sending to the cloud but also the data about the Things which defines  the Thing inside an organization. In this article, I want to show how  Neo4j Graph database can be used for IoT Data Modelling.

***Note:\*** *If you want to set up the reference Neo4j IoT Graph Data model by yourself follow the steps specified in my* [*Github*](https://github.com/muntasirjoarder/NeoThings) *page.*

# What is a Thing?

A “Thing” in the context of IoT (Internet-of-Things) is an entity or  physical object that has the ability to sense (using sensors connected  to it) and send data to the internet. Most of the things only send data. But some of the Things can also receive a command to act (ie. dim  streetlight level to 50%, or open the flood gate and so on).

# Why IoT Data Modelling is necessary?

As per Statista, the total installed base of Internet of Things (IoT)  connected devices is projected to amount to 75.44 billion worldwide by  2025. Because most of the cities are concentrating on Smart City  initiatives, hundreds and thousands of IoT devices are going to be  deployed. So it is very much necessary to think about how these “Things” are related to the other entities of the organization. And every  organization or City will have a different view on positioning the  “Thing” into their picture. A “Thing” will have different Relationships  with other entities of the organization. An IoT Data Model should  capture all possible relationships of a Thing to all other different  entities in such so that when the business or operation asks a question, they can get the answer from the data.

# What is a Graph Database?

A Graph is represented as nodes which are connected with edges. Edges  represent the relationship between these two nodes. In a Graph database, a whiteboard Graph mockup can be literally implemented as database  schema through creating nodes and edges. In the Graph database data gets stored as Graph and can be queried as mimicking the connectivity of the nodes. Unlike a **relational database**, a graph **database** is structured entirely around data relationships. Graph **databases** treat relationships not as a schema structure but as data, like other values

# What is Neo4j?

Neo4j is a Graph database management system implemented by Neo4j Inc. It is  an ACID-compliant transactional database with the capability of native  graph storage and processing.

Cypher is a declarative graph query language that is supported by Neo4j.  Cypher supports SQL like query keywords which can operate over complex  graph database with millions of nodes.

Neo4j provides official drievrs for multiple popular programming languages  like: Python, Javascript, Go, Java and .NET. Using these drivers the  client applications can execute CRUD operations over a Neo4j database.

# Data modeling in Neo4j

In Neo4j, there are nodes and edges. Nodes can be a physical object, a  category or a concept. Nodes will have one or more properties. An edge  represents a relationship between two nodes. Edge can be directed from  one node to another. In Neo4j an edge can also be setup with few  properties. Node-edge graph modeling can also be explained by plain  English where the Nodes are Nouns, Node properties are adjectives. And  relationships are Verbs and the relationship properties can be expressed as Adverbs. But sometimes it does not follow this rule like this.

![Data Modelling in Neo4j](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\data-modelling-in-neo4j.png)



See the following example where “John” is “married to” “Annette” who  reports to “Janine” in her job. Now in Neo4j, it will be possible to  query

![Example Neo4j Model](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\example-neo4j-model.png)

# IoT Data Model

With the property graph model, it is possible to draw the IoT Data Model as a Graph. We put the “Thing” in the middle and then draw all possible  relationships. When we draw the relationships, it can also represent the direction of the relationship. Following is the whiteboard IoT Data  model representing some of the relationships that a “Thing” can have.  Please note that this is just an example. And the different organization can come up with different relationships based on their support,  operational patterns.

![IoT Graph Data Model](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\iot-graph-data-model.png)

The above picture shows the IoT Graph Data Model. But after the data gets  entered into a Neo4j database, an entry (for a device with id Thing08)  will look like as follows:

![Relationship for a Thing](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\relationship-for-a-things.png)



Before implementing the IoT Graph data model into Neo4j we need to decide on  the necessary properties that we need to define the Nodes and the Edges.

In the above schema, I have 10 nodes and 10 edges (ie relationship). In my example model I used the following properties. This is only an example  to show that IoT Data Modelling can be done efficiently using Graph  database like Neo4j.

![Node/Edge Properties](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\node-properties.png)



It is very much important to define proper properties and to maintain the  value for those properties. For example, if you define a property  “battery_level” (100% has fully recharged the battery) against the  relationship “*IS_POWERED_BY*” and then you receive a  payload from your thing specifying your current battery level, you  should have a process which will update the “battery_level” property to  its current value. And then you can use this data to generate a proper  alert to replace the battery for this device. And that is the purpose of creating IoT Data Model.

The best thing about Neo4j is that we will be able to create and store all  the IoT devices and their relationships as a Graph itself. And then use  Cypher query language (which is similar like SQL for Graph database) to  search the graph as it is stored.

In Neo4j Cypher query, nodes are represented with () and relationship (ie  edge) as [ ] and connectivity simply as ASCII drawing –> or <–.  The way you created the graph, the same way you can query it.

# Cypher Queries on IoT Data

Few example queries:

# (1) Show everything connected to Thing08

Cypher query:

```
MATCH (n:Thing {id:”Thing08″})-[r]->(a) return n,r,a
```

Which returns the following graph showing all the connectivity centering the device Thing08

![Thing08 Graph](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\thing08-graph.png)

So from the return graph, you can see how Thing08 is connected to all  other entities in your organization. Also, you can get the property  values as JSON data which you can use. The same query returns the  battery installation date, LoRawan *appid* and *devid* and so on.

![Thing08 JSON Data](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\thing08-json-data.png)

# (2) Return all the departments which will get affected in case Thing08 is disconnected.

Cypher query:

```
MATCH (n:Thing {id: “Thing08”})-[r]-(a:Application)-[u:IS_USED_BY]->(d:Department) return
```

And the result be look as follows:

![Thing08 connectivity with Applications and Departments](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\thing08-relations.png)

So we can see that if Thing08 is not active then three applications (the  red ones) will get affected and we expect to get calls from three  departments (ie IT, Field services and Water management).

# (3) Return all the Battery powered Things with the expected end date of their battery life

Cypher query:

```
MATCH (n:Thing)-[r:IS_POWERED_BY]->(p:Power {id:”battery”}) return n.id as ThingId, n.lat as Lat, n.lon as Lon, apoc.date.format(r.lifefinish,  ‘s’, ‘MM/dd/yyyy’) as ExpectedBatteryFinish
```

Which returns data as follows:

![Things with date of battery life finish date](C:\Muntasir\Assignments\gatsby\emergingtechs\content\2019-05-19-IoT-Data-Modeling-in-Neo4j-Graph DB\battery-finished.png)

Things with date of battery life finish date

The query can be made a bit complex to return only things for which the  remaining battery life is one year or smaller. But these are just  examples.

It is not necessary to capture all possible relationship at the beginning  of the IoT data modeling. You can start with very few edges (ie.  relationships) and then grow as required. As you create a new type of  nodes and edges your Neo4j Graph database schema will automatically  capture it.