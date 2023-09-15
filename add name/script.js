alert("welcome to our page")

let add = document.getElementById("input")
let clickBtn = document.getElementById( "btn")
let text = document.getElementById( "list")


function btnclick()
{
    
    let label = document.getElementById("input").value;

    //document.getElementById("list").innerHTML = label;

    let li = document.createElement("li");

    li.innerText = label;

    text.appendChild(li);

    add.value = "";

    add.focus();    



    let trash = document.createElement('i');
    console.log(trash);
    trash.classList.add('fa','fa-trash')
    li.appendChild(trash);


    let edit = document.createElement('i');

    console.log(edit);

    edit.classList.add('fa' ,'fa-edit');

    li.appendChild(edit);


}

function deletebtn( event)
{
if (event.target.classList[1] === "fa-trash")
{
    let item = event.target.parentElement;

    item.remove();
}

}

function editbtn(event)

    {

        if(event.target.classList[1]=="fa-edit")
        {
            let item =event.target.parentElement;

            let editvalue = prompt('enter the edited test');

            item.innerText = editvalue;
        }

    }


clickBtn.addEventListener('click' , btnclick);

text.addEventListener('click', deletebtn);

text.addEventListener('click',editbtn);
