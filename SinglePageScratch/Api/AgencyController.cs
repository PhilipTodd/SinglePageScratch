using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SinglePageScratch.Api
{
    public class AgencyController : ApiController
    {
        // GET: api/Agency
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Agency/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Agency
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Agency/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Agency/5
        public void Delete(int id)
        {
        }
    }
}
