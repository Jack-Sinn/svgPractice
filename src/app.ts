import './style.scss'
import { setupContainer } from './container.ts'
import { setupHeader } from './header.ts'
import { setupContent } from './content.ts'
import { setupFooter } from './footer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id="container">
</div>
`
console.log('app start')
setupContainer();
setupHeader();
setupContent();
setupFooter();