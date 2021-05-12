import React, { useCallback, useMemo, useState } from 'react'

export function App() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')

  const validationMessage = useMemo(() => {
    if (!amount) return 'Please enter an amount to be transferred.'
    if (!recipient) return 'Please enter a receipient address.'
    return ''
  }, [amount, recipient])

  const onTransfer = useCallback(() => {
    alert(`We are going to transfer ${amount} ETH to ${recipient}.`)
  }, [amount, recipient])

  return (  
    <div style={{width: 500}}>
      <h1>Transfer Ether</h1>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <span style={{width: 100, display: 'inline-block'}}>Amount</span>
        <input style={{flex: 1}} type="number" pattern="[\d\.]+" placeholder="Please enter the amount to be transferred. e.g., 0.1" onChange={(ev) => setAmount(ev.target.value)} />
        <span style={{marginLeft: 8}}>ETH</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <span style={{width: 100, display: 'inline-block'}}>Receipent</span>
        <input style={{flex: 1}} type="text" placeholder="Please enter the receipient address." onChange={(ev) => setRecipient(ev.target.value)} />
      </label>
      <button style={{display: 'block', width: '100%'}} disabled={!!validationMessage} onClick={onTransfer}>{validationMessage || 'Transfer'}</button>
    </div>
  )
}
