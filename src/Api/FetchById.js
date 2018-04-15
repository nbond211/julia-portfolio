import Api from "./Api";

export default async function(id) {
  const api = await Api();
  return await api.getByID(id);
}
