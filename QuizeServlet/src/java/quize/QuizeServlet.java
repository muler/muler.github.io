/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package quize;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.ServletContext;

/**
 *
 * @author username
 */
public class QuizeServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet QuizeServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet QuizeServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //int count = 0;

        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();

        if (session.getAttribute("quize") == null) {
            session.setAttribute("quize", new QuizeModel());
            session.setAttribute("score", 0);
            session.setAttribute("question", 0);
        }
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>The number puzzle</title>");
        out.println("</head>");
        out.println("<body>");

        out.println("<h1> The Number Quiz </h1>");

        out.println("<p> Your current score is");
        //System.err.println(session2.getAttribute("quize"));
        // if ((int) session2.getAttribute("score") == 0) {
        out.println((Integer) session.getAttribute("score"));

        System.out.println(" Current score" + (Integer) session.getAttribute("score"));

        out.println(".</p>");
        System.err.println((Integer) session.getAttribute("question"));
        if (((Integer) session.getAttribute("question")) < QuizeModel.getQuestions().length) {
            System.out.println("inside" + (Integer) session.getAttribute("question"));
            out.println("<p>" + QuizeModel.getQuestions()[(Integer) session.getAttribute("question")] + "</p>");

            out.println("<p> Guess the next number in the sequence</p>");
            //QuizeModel quize = (QuizeModel) request.getAttribute("quize");
//            int getValue = 0;
//            if (request.getParameter("number") != null && request.getParameter("number") != "") {
//                getValue = Integer.parseInt(request.getParameter("number"));
//                System.out.println("get value " + getValue);
//                System.out.println("current answer "+ QuizeModel.getAnswers()[(Integer) session3.getAttribute("question")-1]);
//                if (getValue == QuizeModel.getAnswers()[(Integer) session3.getAttribute("question")]) {
//                    session2.setAttribute("score", (Integer) session2.getAttribute("score") + 1);
//                }
//                //session3.setAttribute("question", (Integer) session3.getAttribute("question") + 1);
//
//            }
            out.println("<br><br>");
            out.println("<form method=\"post\" action = \"QuizeServlet\">");
            out.println(" Your answer: <input type=\"text\" name=\"number\" /> <br />");
            out.println("<input type=\"submit\" value=\"submit\"");
            out.println("</form>");
        } else {
            out.print("<p>You have ended the number quize, with a score of " +
                    (Integer) session.getAttribute("score")+ " out of " + ((Integer) session.getAttribute("question")) );
            session.setAttribute("score", 0);
            session.setAttribute("question", 0);
        }
        out.println("</body>");
        out.println("</html>");

    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        QuizeModel quize = (QuizeModel) request.getAttribute("quize");

        HttpSession session = request.getSession();
        
        int getValue = Integer.parseInt(request.getParameter("number"));
        System.err.println(" get Value" + getValue);
        if (getValue == QuizeModel.getAnswers()[(Integer) session.getAttribute("question")]) {
            session.setAttribute("score", (Integer) session.getAttribute("score") + 1);
            System.err.println("score do post " + (Integer) session.getAttribute("score"));
        }
        session.setAttribute("question", (Integer) session.getAttribute("question") + 1);
        doGet(request, response);

    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
