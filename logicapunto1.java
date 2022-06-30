

import java.util.Scanner;

public class logicapunto1 {
    public static void main(String[] args) {
        try (Scanner entrada = new Scanner(System.in)) {
            String nombre;
            int materias;
            double valorMaterias;
            int valorPapeleria = 20000;
             double descuento = 0.20;
             int carnet = 8000;
             double desc = 0, total = 0.0,neto = 0;
             
             
             System.out.println("Digite su nombre completo");
             nombre = entrada.next();
            
             System.out.println("Dijite la cantidad de saignaturas matriculadas");
            materias = entrada.nextInt();
             
             for( int i= 1; i<=materias; i++){
                 System.out.print("Dijite el valor de la materia  " +i+" : ");
                 valorMaterias = entrada.nextDouble();
                 System.out.println("");
                 
                 neto = neto + valorMaterias;
                 
             }
              desc = neto - (neto * descuento);
                
                 System.out.println("el descuento de la materia  es de : " +desc);
             
             System.out.println("");
             System.out.println("valor de la papeleria es fijo y es de: " +valorPapeleria+ " pesos");
             System.out.println("");
             
  
             System.out.println("valor del carnet estudiantil es fijo y es de : " +carnet+ " pesos");
             System.out.println("");
             
             total = desc + carnet + valorPapeleria;
             System.out.println("Hola  "+nombre+"  su total a pagar es de " +total);
        }
     }
 
 }

