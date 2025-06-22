import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { generateOrderId } from '../utils/generateId';
import { useRouter } from 'next/router';

export default function Home() {
  const [form, setForm] = useState({ name:'',address:'',phone:'',email:'',product:'',quantity:1,note:'' });
  const router = useRouter();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const orderId = generateOrderId();
    const ref = doc(collection(db,'orders'));
    await setDoc(ref,{ ...form, orderId, createdAt: serverTimestamp() });
    router.push({ pathname: '/success', query: { orderId } });
  };

  return (
    <div style={{ maxWidth:600,margin:'0 auto',padding:20 }}>
      <h1>下單表單</h1>
      <form onSubmit={handleSubmit}>
        <label>訂購人姓名<input name="name" onChange={handleChange} required/></label>
        <label>收件地址<input name="address" onChange={handleChange} required/></label>
        <label>電話<input name="phone" onChange={handleChange} required/></label>
        <label>Email<input name="email" type="email" onChange={handleChange} required/></label>
        <label>商品選項
          <select name="product" onChange={handleChange} required>
            <option value="">請選擇</option>
            <option value="A商品">A 商品</option>
            <option value="B商品">B 商品</option>
          </select>
        </label>
        <label>數量<input name="quantity" type="number" min="1" onChange={handleChange} required/></label>
        <label>備註<textarea name="note" onChange={handleChange}/></label>
        <button type="submit">送出訂單</button>
      </form>
    </div>
  );
}
