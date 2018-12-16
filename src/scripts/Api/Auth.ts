import { waitRandom } from "../Utils/Wait";
import { UserInfo } from "../Global";

export async function register(id: string, password: string) {
  await waitRandom();
  localStorage.setItem("user-info", JSON.stringify({ id, password }));
  return { id };
}

export async function login(id: string, password: string) {
  await waitRandom();
  return users.find(u => u.id === id && u.password === password);
}

const users: (UserInfo & { password: string })[] = [
  { id: "foo", password: "bar", name: "foo.bar", age: 30, from: "America" },
  { id: "user01", password: "user01", name: "user01", age: 60, from: "Japan" },
  ...JSON.parse(`[${localStorage.getItem("user-info") || ""}]`),
];

export async function getUserInfo(id: string): Promise<UserInfo | undefined> {
  await waitRandom();
  return users.find(u => u.id === id);
}
