$(document).ready(function() {
  $("#regrasimpostos").DataTable({
    "processing": false,
    "serverSide": false,
    "data" : null,
    "columns": [{
        "data": "impostoNome"
      },
      {
        "data": "modelo"
      },
      {
        "data": "pessoa"
      },
      {
        "data": "contribuinte"
      },
      {
        "data": "estado"
      },
      {
        "data": "cfop"
      },
      {
        "data": null,
        defaultContent: `<a href="#" title="Editar" data-id="impostoID" onclick="editarRegra('variavel')"><i class="edit icon"></i></a>`
      }

    ]
  });
});



function pesquisaRegrasImpostos(imposto) {
  if (imposto != "") {
    var datatable = $("#regrasimpostos").dataTable().api();
    datatable
      .ajax
      .url('/pesquisa/regraimposto/${imposto}')
      .load();

  }
}