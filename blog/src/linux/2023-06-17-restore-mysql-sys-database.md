# 修复mysql数据库中的sys

## 误删sys数据库可以用一下命令进行恢复
```
mysql_upgrade -u root -p
```

##### reference:
<https://stackoverflow.com/questions/8911115/how-to-recover-recreate-mysqls-default-mysql-database>
