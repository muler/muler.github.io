<%-- 
    Document   : result
    Created on : 08-May-2019, 10:56:10
    Author     : username
--%>
<%@ page import="java.util.*" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri='http://java.sun.com/jsp/jstl/core' %>>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
   
     <body>
         
         <c:forEach var="beer" items="${styles}">
         <br> try: ${beer}
         </c:forEach>
         
    </body>
</html>
