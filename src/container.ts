export function setupContainer() {
  document.querySelector<HTMLDivElement>("#container")!.innerHTML = `
<header id="header"></header>
<main id="content"></main>
<footer id="footer"></footer>
`;
  console.log("container.tsx");
}
