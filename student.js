document = document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr =JSON.parse(localStorage.getItem("studentData"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var Email = document.querySelector("#Email").value;
    var Address= document.querySelector("#Address").value;
    var rollNo = document.querySelector("#number").value;
    var Quali =  document.querySelector("#Quali").value;
    var Percentage= document.querySelector("#Percentage").value;
    var  birth= document.querySelector("#birth").value;
    console.log(birth)
    var  course= document.querySelector("#course").value;
    var  DEPT= document.querySelector("#DEPT").value;
    var  file= document.querySelector("#file").value;
    
    var studentObj = {
        name: name,
       Email: Email,
       Address : Address,
        rollNo: rollNo,
        Quali : Quali ,
        Percentage : Percentage,
        birth: birth,
        course:course,
        DEPT:DEPT,
        file : file
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr)
}

function displayFun(studentDataArr) {

    var count = 1;
    studentDataArr.map(function (item) {
    
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.Email;
        var td4 = document.createElement("td");
        td4.innerHTML = item.Address;
        var td5 = document.createElement("td");
        td5.innerHTML = item.rollNo;
        var td6 = document.createElement("td");
        td6.innerHTML = item.Quali;
        var td7 = document.createElement("td");
        td7.innerHTML = item.Percentage;
        var td8 = document.createElement("td");
        td8.innerHTML = item.birth;
        var td9 = document.createElement("td");
        td9.innerHTML = item.course;
        var td10 = document.createElement("td");
        td10.innerHTML = item.DEPT;
        var td11 = document.createElement("td");
        td11.innerHTML = item.file;
        var td12 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "✓";
        btn1.addEventListener("click", function () {
            td12.innerHTML = "<button >Admitted</button>";
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "X";
        btn2.addEventListener("click", function () {
            td12.innerHTML = "<button id='absent'>Rejected</button>";
        
        });
        td12.classList.add("td6");
        td12.append(btn1, btn2);

        tr.append(td1, td2, td3, td4, td5, td6,td7 ,td8 ,td9,td10,td11 ,td12);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(studentDataArr);