export async function handler(event) {
  try {
    const authHeader = event.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return {
        statusCode: 401,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "No autorizado" })
      };
    }

    const data = [
      {
        Fecha: "2026-04-01",
        Hora: 8,
        Operador: "Luis",
        Turbidez_Planta: 45,
        Dosis_P1P2: 12,
        Turbidez_Clar_P1: 3,
        Turbidez_Clar_P2: 4,
        Finales: 1.2,
        Q_Tratada_P1P2: 1500,
        "$/m3_P1P2": 25,
        Calificación_F: 95,
        Turb_P3: 60,
        Dosis_Aplic_Coag1: 14,
        Clarificadas_P3: 5,
        Turb_Sal: 1.5,
        Caudal_m3_P3: 800,
        "$/m3_SP3": 30,
        Calificación_Final_P3: 93,
        Turb_Ing_Tonch: 70,
        Apl_PHCA: 11,
        Clarif_Tonch: 6,
        Turb_Prod_Tonch: 1.8,
        Q_Trat_Tonch: 900,
        "$/m3_Tonch": 28,
        Calificación_Final_Tonch: 90,
        Costo_P1P2: 12000,
        Costo_P3: 9000,
        "Costo_Tonchalá": 10000,
        Q_Tratada_P1: 700,
        Q_Tratada_P2: 800,
        Vol_P3: 800,
        Costo_P1: 6000,
        Costo_P2: 6000
      }
    ];

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Error interno del servidor" })
    };
  }
}
