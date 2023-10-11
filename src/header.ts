export function setupHeader() {
  document.querySelector<HTMLDivElement>("#header")!.innerHTML = `
  <div>
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    fill="purple"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V83.8183C76.9376 106.605 120.705 106.85 200 83.8183V0H1Z"
      stroke="purple"
    />
  </svg>
</div>
    `;
  console.log("header.tsx");
}
