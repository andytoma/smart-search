var search_history = [
  "how mach does a ja dev earn?",
  "chisinau pizza",
  "reactjs tutorials",
  "angular vs react",
  "zelenskii ii presedinte"
];

let input = document.querySelector('input');
    input.addEventListener('click' , show_history);

let form = document.querySelector('form');
    form.addEventListener('submit' , save_history);

function save_history(e){
  search_history.unshift( input.value );
                                                           // 2) de prevenit dublarea valoprilor!!!
                                                           // case/ lower/ upper
                                                           // de prevenit adaugarae valorilor goale  *// spatiile de prisos

  e.preventDefault();  //  ca sa nu sa se faca F5
}

function show_history(){
  var div = document.getElementsByClassName('dropdown-menu')[0];
  //    div.innerHTML = '';
  $(div).empty();                                           // 1) while(  .. children.lenght -> .removeChild() )

  for (var i = 0; i < search_history.length; i++) {
    let a    = document.createElement('a');
    a.className = "dropdown-item";
    if (search_history.length - i == 3) {
      a.style.opacity = 0.8;
    }
    if (search_history.length - i == 2) {
      a.style.opacity = 0.6;
    }
    if (search_history.length - i == 1) {
      a.style.opacity = 0.4;
    }
    a.innerHTML  = '<span class="badge badge-primary" onclick="remove(event)"> x   </span>'  + search_history[i];   // de eliminat span din text care apare in input
                                                                                        // string repleis
    a.addEventListener('click' , select)
    div.appendChild(a);
  }
}
show_history();


function select(e){
  console.log(e.target.innerHTML);
  input.value = e.target.innerHTML;
};

function remove(e){
  e.stopPropagation();    // nu transmite click-ul parintelui <a>
  console.log(e.target);
}
