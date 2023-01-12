# 2023.01.12 (수)

# ✍️ What I learned Today ?

---
## ✨HTTP 세션
---
`HTTP`는 무상태 프로토콜로, 비연결성을 가지고있다. 이것을 보완해주기 위해 사용하는것이 `session` 정보를 장바구니에 담듯 담아서 사용자가 브라우저를 종료할때 까지 유지해준다.

서버는 요청한 클라이언트에게 요청 헤더의 set-cookie값으로 클라이언트 식별자인 `session-id`를 응답한다.

서버로부터 응답받은 session-id는 해당 서버와 클라이언트 메모리에 저장된다! 이때 쿠키는 세션 종료시 같이 소멸되는 Memory Cookie가 사용.

---

#####절차
<ol>
<li>클라이언트가 서버에 Resource를 요청합니다.
<li>서버에서는 HTTP Request를 통해 쿠키에서 Session id를 확인을 한 후에 없으면 Set-Cookie를 통해 새로 발행한 Session-id 보냅니다.
<li>클라이언트는 HTTP Request 헤더에 Session id를 포함하여 원하는 Resource를 요청을 합니다.
<li>서버는 Session id를 통해 해당 세션을 찾아 클라이언트 상태 정보를 유지하며 적절한 응답을 합니다.
</ol>

ex) 
```java 

 @GetMapping("/setSession")
    public String setSession(HttpServletRequest request) {
        HttpSession httpSession = request.getSession(true);
        httpSession.setAttribute("name", "hi");
        httpSession.setAttribute("introduce", "myname  is..");

        return "setSession";
    }

    @GetMapping("/getSession")
    public String getSession(HttpServletRequest request) {
        HttpSession session = request.getSession();

        log.debug("SessionId : {}", session.getId());
        log.debug("session name : {}", session.getAttribute("name"));
        return "getSession";
    }

 ```   
<ul>
<li>request.getSession(true) : 이미 세션이 있으면 세션을 돌려주고 없으면 새로운 세션을 생성한다.
<li>request.getSession(false) : 세션이 있으면 세션을 주고 없으면 null을 돌려준다. 
