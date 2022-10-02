import Realm from "realm";

const app = new Realm.App({ id: "application-0-wbhrj" });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
} catch(err) {
  console.error("Failed to log in", err);
}


class TodoList extends Realm.Object { }
TodoList.schema = {
    name: "TodoList",
    properties: {
        todoID: {type:"string",indexed:true},
        task: "string",
    },
    primaryKey: "todoID",
};

export default new Realm({ schema: [TodoList] });