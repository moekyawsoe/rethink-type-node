---
marp: true
theme: default
_class: lead
paginate: true
backgroundColor: #fff
---

# Typescript-RethinkDB
Moe Kyaw Soe
Brainwave Data

---

# UserController -> UserService -> UserModel

Dependency Injection
 - containers
 - inject dependencies (@Service)

Dto
Model Interface

---
# Typedi
Achieving dependency injection with containers
The most common way to achieve dependency injection is to use a dependency injection container.

We can create a global container object that will hold all the instances of the dependencies, and we can inject the dependencies into the class.

---

## Global RethinkDB Class

- RethinkDB ORM
- RethinkDB is the open-source, scalable database that makes building realtime apps dramatically easier.

https://rethinkdb.com/

---

## Testing & Thanks
- rethinkdbdash [ https://www.npmjs.com/package/rethinkdbdash ]
- typedi [ https://www.npmjs.com/package/typedi ]
- https://blog.carbonteq.com/dependency-injection-containers-what-which-and-how/
