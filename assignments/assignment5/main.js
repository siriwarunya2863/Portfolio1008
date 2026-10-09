// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    // ให้นักศึกษากำหนดชื่อหัวข้อของหน้าเว็บที่ id="top"
    let topHeader = document.getElementById("top");
    topHeader.innerHTML = "Welcome to the Forum";

    // ผูก event onclick ให้กับปุ่ม Post และ Clear (Unobtrusive JS)
    let postButton = document.getElementById("post");
    let clearButton = document.getElementById("clear");

    postButton.onclick = postFunction;
    clearButton.onclick = clearFunction;
}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0
let postCount = 0;

function postFunction() {
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    let messageInput = document.getElementById("message");
    let text = messageInput.value;

    // เช็กกรณีไม่ได้พิมพ์อะไรเลย
    if (text === "") {
        alert("กรุณากรอกข้อความก่อนกด Post!");
        return;
    }

    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ และเพิ่มค่า postCount
    if (postCount === 0) {
        let topicBox = document.getElementById("topic");
        topicBox.innerHTML = text;
        postCount++;
    } else if (postCount === 1) {
        let reply1Box = document.getElementById("reply1");
        reply1Box.innerHTML = text;
        postCount++;
    } else if (postCount === 2) {
        let reply2Box = document.getElementById("reply2");
        reply2Box.innerHTML = text;
        postCount++;
    } else {
        alert("โพสต์ครบตามจำนวนที่กำหนดแล้ว!");
    }

    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    messageInput.value = "";
}

function clearFunction() {
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    // 2. ล้างข้อความใน textarea (id="message")
    document.getElementById("message").value = "";

    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น
    postCount = 0;
}
