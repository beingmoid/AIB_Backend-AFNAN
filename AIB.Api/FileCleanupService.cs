using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace AIB.Api
{
    public class FileCleanupService:IHostedService,IDisposable
    {
        private Timer _timer;
        private readonly string _folderPath;
        private readonly TimeSpan _interval;
        private IWebHostEnvironment _env;
        public FileCleanupService(IWebHostEnvironment env)
        {
            _env = env;
            _folderPath =  _env.ContentRootPath + "\\uploads"; // Replace with your folder path
       
            _interval = TimeSpan.FromMinutes(60); // Set the interval for cleanup
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(DeleteFiles, null, TimeSpan.Zero, _interval);
            return Task.CompletedTask;
        }

        private void DeleteFiles(object state)
        {
           
            try
            {
                var files = Directory.GetFiles(_folderPath);

                foreach (var file in files)
                {
                    File.Delete(file);
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions, e.g., log errors
            }
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
