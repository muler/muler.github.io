/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.mumde.cs545;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 *
 * @author username
 */
public class Label extends SimpleTagSupport{
    
    String thecolor;
    String words;
    public void doTag() throws JspException, IOException{
        JspWriter out = getJspContext().getOut();
        
        if (thecolor != null)
            out.write(String.format("<span style='color:%s'>%s</span>", thecolor, words));
        else
            out.write(String.format("<span>%s</span>", words));
    }

    public void setThecolor(String thecolor) {
        this.thecolor = thecolor;
    }

    public void setWords(String words) {
        this.words = words;
    }
    
    
}
