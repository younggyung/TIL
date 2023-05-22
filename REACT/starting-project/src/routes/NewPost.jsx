import classes from "./NewPost.module.css";

import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="body"
            required
            rows={3}
          />
        </p>
        <p>
          <label htmlFor="name">your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
export async function action({ request }) {
  const formData = await request.formData(); // 여기서 저장된 데이터는 좀 복잡한 형태로 키-값형태가 아니다. 여기서 반환된 객체에는 get() 메서드가 있어서 get으로 bodyfm를 가져올 수 있지만 아래의 방법이 더 간단.
  const postData = Object.fromEntries(formData); //Form 에서 넣어준 각각의 name을 통해서 키-값 타입으로 변환해준다.
  formData.get("body");
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect('/'); // 함수 호출의 결과를 반환. 응답객체를 반환하면 
}
