using System.Collections.Generic;
using System.Linq;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/imc")]
    public class ImcController : ControllerBase
    {
        private readonly DataContext _context;

        public ImcController(DataContext context) =>
            _context = context;
        

        // GET: /api/imc/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.imcs.Include(a => a.usuario).ToList());

        // POST: /api/imc/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Imc imc)
        {
            if(imc != null && _context.usuarios.Any(a => a.UsuarioId == imc.UsuarioId))
            {
                _context.imcs.Add(imc);
                _context.SaveChanges();
                return Created("", imc);
            }
            else
                return NotFound("Usuario não cadastrado no sistema!");
        }

        // GET: /api/imc/buscar/{id}
        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar([FromRoute] int id)
        {
            Imc imc = _context.imcs.Include(a => a.usuario).FirstOrDefault(f => f.ImcId.Equals(id));
            return imc != null ? Ok(imc) : NotFound();
        }
    }
}