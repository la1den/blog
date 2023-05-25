---
title: "Mongodb 报错处理"
date: 2023-05-20
author: la1den
---



在使用docker运行Mongodb时，报错如下：
> scrapy_tutorial_mongodb_server  | about to fork child process, waiting until server is ready for connections.
> scrapy_tutorial_mongodb_server  | forked process: 10
> scrapy_tutorial_mongodb_server  | 
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.269+00:00"},"s":"I",  "c":"CONTROL",  "id":20698,   "ctx":"-","msg":"***** SERVER RESTARTED *****"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.271+00:00"},"s":"I",  "c":"CONTROL",  "id":23285,   "ctx":"main","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.271+00:00"},"s":"I",  "c":"NETWORK",  "id":4915701, "ctx":"main","msg":"Initialized wire specification","attr":{"spec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":17},"outgoing":{"minWireVersion":6,"maxWireVersion":17},"isInternalClient":true}}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.272+00:00"},"s":"I",  "c":"NETWORK",  "id":4648601, "ctx":"main","msg":"Implicit TCP FastOpen unavailable. If TCP FastOpen is required, set tcpFastOpenServer, tcpFastOpenClient, and tcpFastOpenQueueSize."}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationDonorService","namespace":"config.tenantMigrationDonors"}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationRecipientService","namespace":"config.tenantMigrationRecipients"}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"ShardSplitDonorService","namespace":"config.tenantSplitDonors"}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"CONTROL",  "id":5945603, "ctx":"main","msg":"Multi threading initialized"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"CONTROL",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":10,"port":27017,"dbPath":"/var/lib/mongodb","architecture":"64-bit","host":"40e1cada3e14"}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"CONTROL",  "id":23403,   "ctx":"initandlisten","msg":"Build Info","attr":{"buildInfo":{"version":"6.0.6","gitVersion":"26b4851a412cc8b9b4a18cdb6cd0f9f642e06aa7","openSSLVersion":"OpenSSL 3.0.2 15 Mar 2022","modules":[],"allocator":"tcmalloc","environment":{"distmod":"ubuntu2204","distarch":"x86_64","target_arch":"x86_64"}}}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"CONTROL",  "id":51765,   "ctx":"initandlisten","msg":"Operating System","attr":{"os":{"name":"Ubuntu","version":"22.04"}}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.273+00:00"},"s":"I",  "c":"CONTROL",  "id":21951,   "ctx":"initandlisten","msg":"Options set by command line","attr":{"options":{"config":"/tmp/docker-entrypoint-temp-config.json","net":{"bindIp":"127.0.0.1","port":27017,"tls":{"mode":"disabled"}},"processManagement":{"fork":true},"storage":{"dbPath":"/var/lib/mongodb","journal":{"enabled":true}},"systemLog":{"destination":"file","logAppend":true,"path":"/proc/1/fd/1"}}}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"E",  "c":"CONTROL",  "id":20557,   "ctx":"initandlisten","msg":"DBException in initAndListen, terminating","attr":{"error":"NonExistentPath: Data directory /var/lib/mongodb not found. Create the missing directory or specify another path using (1) the --dbpath command line option, or (2) by adding the 'storage.dbPath' option in the configuration file."}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"REPL",     "id":4784900, "ctx":"initandlisten","msg":"Stepping down the ReplicationCoordinator for shutdown","attr":{"waitTimeMillis":15000}}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"REPL",     "id":4794602, "ctx":"initandlisten","msg":"Attempting to enter quiesce mode"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"-",        "id":6371601, "ctx":"initandlisten","msg":"Shutting down the FLE Crud thread pool"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"COMMAND",  "id":4784901, "ctx":"initandlisten","msg":"Shutting down the MirrorMaestro"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"SHARDING", "id":4784902, "ctx":"initandlisten","msg":"Shutting down the WaitForMajorityService"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"NETWORK",  "id":20562,   "ctx":"initandlisten","msg":"Shutdown: going to close listening sockets"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"NETWORK",  "id":4784905, "ctx":"initandlisten","msg":"Shutting down the global connection pool"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"CONTROL",  "id":4784906, "ctx":"initandlisten","msg":"Shutting down the FlowControlTicketholder"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"-",        "id":20520,   "ctx":"initandlisten","msg":"Stopping further Flow Control ticket acquisitions."}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"NETWORK",  "id":4784918, "ctx":"initandlisten","msg":"Shutting down the ReplicaSetMonitor"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"I",  "c":"SHARDING", "id":4784921, "ctx":"initandlisten","msg":"Shutting down the MigrationUtilExecutor"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"ASIO",     "id":22582,   "ctx":"MigrationUtil-TaskExecutor","msg":"Killing all outstanding egress activity."}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"COMMAND",  "id":4784923, "ctx":"initandlisten","msg":"Shutting down the ServiceEntryPoint"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"CONTROL",  "id":4784925, "ctx":"initandlisten","msg":"Shutting down free monitoring"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"CONTROL",  "id":4784927, "ctx":"initandlisten","msg":"Shutting down the HealthLog"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"CONTROL",  "id":4784928, "ctx":"initandlisten","msg":"Shutting down the TTL monitor"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"CONTROL",  "id":6278511, "ctx":"initandlisten","msg":"Shutting down the Change Stream Expired Pre-images Remover"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"CONTROL",  "id":4784929, "ctx":"initandlisten","msg":"Acquiring the global lock for shutdown"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"-",        "id":4784931, "ctx":"initandlisten","msg":"Dropping the scope cache for shutdown"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"CONTROL",  "id":20565,   "ctx":"initandlisten","msg":"Now exiting"}
> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.277+00:00"},"s":"I",  "c":"CONTROL",  "id":23138,   "ctx":"initandlisten","msg":"Shutting down","attr":{"exitCode":100}}
> scrapy_tutorial_mongodb_server  | ERROR: child process failed, exited with 100
> scrapy_tutorial_mongodb_server  | To see additional information in this output, start without the "--fork" option.
> scrapy_tutorial_mongodb_server  | Take a look at your mongod configuration to see if something is wrong.
> scrapy_tutorial_mongodb_server  | Could not init database.
> scrapy_tutorial_mongodb_server  | ['/usr/bin/mongod', '--bind_ip', '127.0.0.1', '--port', '27017', '--logappend', '--config', '/tmp/docker-entrypoint-temp-config.json', '--tlsMode', 'disabled', '--logpath', '/proc/1/fd/1', '--fork']
> scrapy_tutorial_mongodb_server  | Subprocess failed with errorcode 100
> scrapy_tutorial_mongodb_server exited with code 100

```
''' docker-compse.yml
version: '3'
services:
 mongodb_server:
    container_name: scrapy_tutorial_mongodb_server
    image: mongodb/mongodb-community-server
    # env_file: './dev.env'
    environment:
      MONGODB_INITDB_ROOT_USERNAME: root
      MONGODB_INITDB_ROOT_PASSWORD: example
    volumes:
        # - './mongodb.conf:/etc/mongodb.conf'
        - './mongo.conf:/etc/mongo.conf'
    command:
        - '-f'
        - '/etc/mongo.conf'
    ports:
        - '37017:27017'
```

仔细查看报错可以发现，在最后一行提示配置有误。

再往上翻可以看到

> scrapy_tutorial_mongodb_server  | {"t":{"$date":"2023-05-25T10:39:55.276+00:00"},"s":"E",  "c":"CONTROL",  "id":20557,   "ctx":"initandlisten","msg":"DBException in initAndListen, terminating","attr":{"error":"NonExistentPath: Data directory /var/lib/mongodb not found. Create the missing directory or specify another path using (1) the --dbpath command line option, or (2) by adding the 'storage.dbPath' option in the configuration file."}}

说明配置的systemlog的path有误，改正即可。


