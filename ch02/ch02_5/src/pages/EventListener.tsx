// 103p 이벤트 리스너
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const { isTrusted, target, bubbles } = e
  console.log('mouse click occurs.', isTrusted, target, bubbles)
})
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const { isTrusted, target, bubbles } = e
  console.log('mouse click also occurs.', isTrusted, target, bubbles)
})

export default function EventListener() {
  return <div>EventListener</div>
}
