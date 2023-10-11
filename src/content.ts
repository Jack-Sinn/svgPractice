export function setupContent() {
  document.querySelector<HTMLDivElement>("#content")!.innerHTML = `
  <div>
  <svg width="200" height="200">
    <use xlink:href="src/source.svg#circle1" />
  </svg>
</div>
`;
  console.log("content.tsx");
}
