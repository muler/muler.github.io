/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calc;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author username
 */
public class ImprovedCalcServlet extends HttpServlet {

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
    @Override
    public void service(HttpServletRequest req, HttpServletResponse res) throws IOException{
         int i, j, k;
         PrintWriter out = res.getWriter();
         out.println("<!DOCTYPE html>");
         out.println("<html>");
         out.println("<head>");
         out.println("<title>Servlet ImprovedCalcServlet</title>");            
         out.println("</head>");
         out.println("<body>");
         //out.println("<h1>Servlet ImprovedCalcServlet at " + req.getContextPath() + "</h1>");
         out.println("<form action =\"calculator\">");
         out.println("<input type=\"text\" name = \"num1\" size=\"6\" value=\""+
                 req.getParameter("num1")+"\"> +");
         out.println("<input type=\"text\" name = \"num2\" size=\"6\" value=\""+
                 req.getParameter("num2")+"\"> +");
         if((req.getParameter("num1") !="") & req.getParameter("num2") !=""){
             i = Integer.parseInt(req.getParameter("num1"));
             j = Integer.parseInt(req.getParameter("num2"));
             k = i + j;
            // out.println(i + " + " + j +" = " + k + "<br>");
             out.println("<input type=\"text\" name = \"num5\" size=\"6\" value=\""+
                 k +"\">");
         }else
             out.println("<input type=\"text\" name = \"num5\" size=\"6\">");
         out.println("<br><br>");
         
         
         out.println("<input type=\"text\" name = \"num3\" size=\"6\" value=\""+
                 req.getParameter("num3")+"\"> *");
         out.println("<input type=\"text\" name = \"num4\" size=\"6\" value=\""+
                 req.getParameter("num4")+"\">=");
         
         if((req.getParameter("num3") !="") & req.getParameter("num4") !=""){
            i = Integer.parseInt(req.getParameter("num3"));
            j = Integer.parseInt(req.getParameter("num4"));
            k = i * j;     
            //out.println(i + " * " + j +" = " + k + "<br>");
            out.println("<input type=\"text\" name = \"num6\" size=\"6\" value=\""+
                 k +"\">");
        }else
             out.println("<input type=\"text\" name = \"num6\" size=\"6\">");
         out.println("<br><br>");
         out.println("<input type=\"submit\" value=\"submit\"");
         out.println("</form>");
         out.println("</body>");
         out.println("</html>");       
        
    }

}
