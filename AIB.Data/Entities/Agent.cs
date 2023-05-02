﻿using AIB.Common;
using NukesLab.Core.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace AIB.Data.Entities
{
    public class Agent:BaseEntity<int>
    {
        public string Name { get; set; }
        public decimal OpeningBalance { get; set; }
        public Guid? BranchId { get; set; }
        public Branch Branch { get; set; }

   
        private  ICollection<Transaction> _transactions;
        public virtual ICollection<Transaction> Transactions => _transactions ?? (_transactions = new List<Transaction>());
        private ICollection<Outstandings> _outStandings;
        public virtual ICollection<Outstandings> Outstandings => _outStandings ?? (_outStandings = new List<Outstandings>());
       
        private ICollection<Sales> _sales;
        [JsonIgnore]
        public virtual ICollection<Sales> Sales => _sales ?? (_sales = new List<Sales>());
    }
}
