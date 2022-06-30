

import java.util.Scanner;


public class logicapunto2 {

    
    public static void main(String[] args) {
        
        Scanner entrada = new Scanner(System.in);
        
        int a,b,c,d;
        int mayor = 0;
        int menor = 0;
   
        
        System.out.println("Digite un numero ");
        a = entrada.nextInt();
        
        
        System.out.println("Digite un numero ");
        b = entrada.nextInt();
        
        
        System.out.println("Digite un numero ");
       c = entrada.nextInt();
        
        
        System.out.println("Digite un numero ");
        d = entrada.nextInt();
        
        
if(a != b && a != c && a != d && b != c && b != d && c != d) 
    if( a > b )
	if(a > c)
		if(a > d )
		System.out.println("el mayor es" +a); 
                    else
			System.out.println("el mayor es" +d);
                    
                else
			if(c > d )
			System.out.println("el mayor es" +c); 
                        else
			System.out.println("el mayor es" +d); 
                     
            else
		if(b > c )
			if( b > d )
				System.out.println("el mayor es" +b); 
                        else
				System.out.println("el mayor es" +d); 
                         
                else
		    if( c > d )
			System.out.println("el mayor es" +c); 
                     else
			System.out.println("el mayor es" +d); 
else
         System.out.println("ingrese 4 numeros diferentes");
 
if( a < b )
	if(a < c)
		if(a < d )
		System.out.println("el menor es" +a); 
                    else
			System.out.println("el menor es" +d);
                    
                else
			if(c < d )
			System.out.println("el menor es" +c); 
                        else
			System.out.println("el menor es" +d); 
                     
            else
		if(b < c )
			if( b < d )
				System.out.println("el menor es" +b); 
                        else
				System.out.println("el menor es" +d); 
                         
                else
		    if( c < d )
			System.out.println("el menor es" +c); 
                     else
			System.out.println("el menor es" +d);
 
                  

    }

}