        <%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculadora de IMC - JSP</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<div class="modal-dialog">
    <div class="modal-content">
        <div class="panel-heading">
            <h3 class="panel-title">Calculadora de IMC</h3>
        </div>
        <div class="panel-body">
            <form>
                <fieldset>
                    <div class="form-group">
                        <input class="form-control" placeholder="Altura" name="altura" type="text">
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Peso" name="peso" type="text">
                    </div>
                    <button class="btn btn-primary">Calcular IMC</button>
                </fieldset>
            </form>
        </div>
    </div>
    <!-- Scriptlet. Codigo Java no HTML. -->
        <%
                String paramAltura = request.getParameter("altura");
                String paramPeso = request.getParameter("peso");
                Float imc=null;
                if (paramAltura != null && paramPeso != null) {
                    Float altura = Float.parseFloat(paramAltura.replace(",", "."));
                    Float peso = Float.parseFloat(paramPeso.replace(",", "."));

                    imc = peso / (altura * altura);
                }

                %>
    <br>

        <%
        if (imc != null) {
    %>
    <p>
        IMC é igual a <%=imc%>.
    </p>
        <%
        } else {
    %>
    <p>
        Esperando valores...
    </p>
        <%
        }

    %>

</body>
</html>