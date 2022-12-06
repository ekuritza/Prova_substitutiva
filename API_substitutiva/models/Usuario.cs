using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Usuario
    {
        public Usuario () => CriadoEm = DateTime.Now;
        public int      UsuarioId { get; set; }
        public string   Nome { get; set; }
        public string   Nascimento { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}