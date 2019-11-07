

 (function($){
		
		RemoveTableRow = function(handler) {
		var tr = $(handler).closest('tr');
		
		tr.fadeOut(400, function(){
			tr.remove();
		});
		
		return false;

		};



		AddTableRow = function() {
			
			var newRow = $('<tr>');
			var cols="";
			
				cols+='<td> <input type="text" id="ct" placeholder="Demanda" name="ct"></td>';	
				cols+='<td><select name="Tester">';	
				cols+='<option  value="fabricio" name="fabricio">Fabricio</option>';	
				cols+='<option  value="rodrigoB" name="rodrigoB">RodrigoB</option>';	
				cols+='<option  value="rodrigoS" name="rodrigoS">RodrigoS</option>';	
				cols+='<option  value="vivi" name="vivi">Vivi</option>';	
				cols+='<option  value="tiago" name="tiago">Tiago</option>';	
				cols+='</select></td>';
				cols+='<td> <input type="text" id="ct" placeholder="CT" name="ct"></td>';
				cols+='<td> <input type="text" id="stm" placeholder="STM" name="stm"></td>';
				cols+='<td> <input type="text" id="uc" placeholder="UC" name="uc"></td>';
				cols+='<td><select name="planejamento">';
				cols+='<option  value="andamento" name="andamento">Andamento</option>';
				cols+='<option  value="concluido" name="concluido">Concluído</option>';
				cols+='</select></td>';
				cols+='<td><select name="execucao">';
				cols+='<option  value="ok" name="ok">OK</option>';
				cols+='<option  value="teste" name="teste">Teste</option>';
				cols+='<option  value="erro" name="erro">Erro</option>';
				cols+='<option value="reteste" name="reteste">Reteste</option>';
				cols+='<option  value="corrigido" name="corrigido">Corrigido</option>';
				cols+='<option  value="impedido" name="impedido">Impedido</option>';
				cols+='</select></td>';
				cols+='<td><select name="Dev">';
				cols+='<option  value="fabricio" name="fabricio">Fabricio</option>';
				cols+='<option  value="everson" name="everson">Everson</option>';
				cols+='<option  value="cristiano" name="cristiano">Cristiano</option>';
				cols+='<option  value="anderson" name="anderson">Anderson</option>';
				cols+='<option  value="guilherme" name="guilherme">Guilherme</option>';
				cols+='</select></td>';
				cols+='<td class="actions"><button class="btn btn-large btn-danger" onclick="RemoveTableRow(this)" type="button"> x </button></td>';
				
				newRow.append(cols);
				
				$("#products-table").append(newRow);
				
				return false;
				
		};

})(jQuery);