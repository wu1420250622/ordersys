import { useRouter } from 'next/router';

export default function Success() {
  const { orderId } = useRouter().query;
  return (
    <div style={{ maxWidth:600,margin:'0 auto',padding:20 }}>
      <h1>訂單已送出</h1>
      <p>感謝您！您的訂單編號：<strong>{orderId}</strong></p>
    </div>
  );
}
