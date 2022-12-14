# 2022.12.14(수)

# ✍️ What I learned Today ?

---

### 💜개인공부 - 이론 및 실습

스프링부트 유튜브 강의 수강 (홍팍-7강.폼데이터 주고받기)

- 간단하게 mutache파일에 폼태그와 제목,내용 입력양식을 만들어준다.

```java
<form class="container" action="/articles/create" method="post">
    <div class="mb-3">
        <label class="form-label">제목</label>
        <input type="text" class="form-control" name="title">
    </div>
    <div class="mb-3">
        <label class="form-label">내용</label>
        <textarea class="form-control" rows="3" name="content"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

- 그리고 이 폼데이터를 받을 컨트롤러

```java
package com.example.firstproject.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.example.firstproject.dto.ArticleForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ArticleController {
    @GetMapping("/articles/new")
    public String newArticleForm(){
        return "articles/new";
    }

    @PostMapping("/articles/create")
    public String createArticle(ArticleForm form){
        System.out.println(form.toString());
        return "";
    }
}
```

- 폼데이터를 저장해줄 DTO

```java
package com.example.firstproject.dto;

public class ArticleForm {
    private String title;
    private String content;

		public ArticleForm(){}
    public ArticleForm(String title, String content) {
        this.title = title;
        this.content = content;
    }

    @Override
    public String toString() {
        return "ArticleForm{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

}
```

이렇게 코드를 잘 작성했는데도 system.out.println(form.toString()) 이 찍히지않았다.

왜그런가 찾아보다보니, 댓글에 다른분이 잘 남겨 주셨더랬다. 

기본생성자는 자동생성 된다고 알고있지만, 왠만하면 같이 써주는 습관을 들이래서 그렇게 했는데 

**매핑 규칙이 NoArgsConstructor와 AllArgsConstructor 둘 다 있는 경우와 AllArgsConstructor만 있는 경우가 다르다고 한다.**

NoArgsConstructor가 선언이 되어있으면 NoArgsConstructor를 호출하고 setter로 Dto에 값이 들어가기 때문에, setter메소드를 넣어주거나  NoArgsConstructor를 삭제해야 올바른 결과가 나오는 것이였다.

다시 실행해본 바, 기본생성자를 삭제하고 실행 → *올바른결과*

기본생성자를 유지하고 게터세터 메소드 추가하고 실행 → *올바른결과* 

를 얻을 수 있었다.