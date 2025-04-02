import Card from "./components/Card";

function App() {
  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", margin: "auto"}}>
      <Card image="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D" name="Apple" price="₹100"/>
      <Card image="https://plus.unsplash.com/premium_photo-1664304188646-47b168d698aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFuYW5hfGVufDB8fDB8fHww" name="Banana" price="₹50"/>
      <Card image="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Grapes" price="₹100"/>
      <Card image="https://images.unsplash.com/photo-1541472596887-494ee5c0fe30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFwYXlhfGVufDB8fDB8fHww" name="Papaya" price="₹40"/>
      <Card image="https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D" name="Watermelon" price="₹40"/>
      <Card image="https://images.unsplash.com/photo-1530730459653-e0edd4c6072e?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Pomegranate" price="₹200"/>
      <Card image="https://images.unsplash.com/photo-1521997888043-aa9c827744f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l3aXxlbnwwfHwwfHx8MA%3D%3D" name="Kiwi" price="₹500"/>
      <Card image="https://images.unsplash.com/photo-1693407241318-fc9a95f076f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YWNhcmRvfGVufDB8fDB8fHww" name="Avacacdo" price="₹600"/>
      <Card image="https://plus.unsplash.com/premium_photo-1675715403312-73f52c7e228b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbmdvfGVufDB8fDB8fHww" name="Mango" price="₹120"/>
      <Card image="https://plus.unsplash.com/premium_photo-1667051230160-5906f5683a59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhZ29uJTIwZnJ1aXRzfGVufDB8fDB8fHww" name="Dragon Fruits" price="₹400"/>
    </div>
  )
}

export default App