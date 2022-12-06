using System.Reflection;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using API.Models;
using System.Collections.Generic;

namespace API.Models
{
    public class Imc
    {
        public Imc () => CriadoEm = DateTime.Now;
        public int       ImcId { get; set; }
        public int       Altura { get; set; }
        public int       Peso { get; set; }
        public int       UsuarioId { get; set; }
        public  Usuario usuario { get; set; }
        public DateTime  CriadoEm { get; set; }
    }
}