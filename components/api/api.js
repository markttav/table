export async function update(root) {
  const response = await fetch(root.url);
  const data = await response.json();

  const arr = [...data.rows];

  arr.map((e, i) => (e.number = i + 1));

  return arr;
}
