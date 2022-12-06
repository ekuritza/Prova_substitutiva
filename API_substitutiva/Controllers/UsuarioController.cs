using System;
using System.Collections.Generic;
using System.Linq;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController : ControllerBase
    {
        private readonly DataContext _context;

        public UsuarioController(DataContext context) =>
            _context = context;
        

        // GET: /api/usuario/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.usuarios.ToList());

        // POST: /api/usuario/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Usuario usuario)
        {
            _context.usuarios.Add(usuario);
            _context.SaveChanges();
            return Created("", usuario);
        }
    }
}