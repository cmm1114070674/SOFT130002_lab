# Answer

## The function of cookie and session

cookie 和 session 用于保存用户信息和与服务器的会话状态。

## The advantages & disadvantages of cookie and session.

1. cookie 是存储在本地浏览器，而 session 存储在服务器。
2. cookie 只能报关ASCII字符串, session 能够存取任何类型的数据，如 Java 对象等
3. cookie存储在浏览器中，对浏览器是可见的，客户端的一些程序可以查看、复制甚至修改Cookie中的内容, 而 session 存储在服务器上，对客户端是透明的，不存在敏感信息泄露风险
4. session 保存在服务器上，每个用户都会产生一个 session，假如并发用户十分多，会消耗大量的内存,cookie 保存在客户端，不占用服务器资源。
5. cookie 支持跨域访问, session 不支持