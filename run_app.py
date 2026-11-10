"""
NutriMeal AI - Local Launcher
Starts a lightweight local HTTP server and opens your default browser.
"""
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    handler = http.server.SimpleHTTPRequestHandler
    
    # Try PORT or next available
    for p in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", p), handler) as httpd:
                url = f"http://localhost:{p}/index.html"
                print("=" * 60, flush=True)
                print(f" NutriMeal AI is live at: {url}", flush=True)
                print(f" Non-Veg scheduled on: Wednesday, Friday, Sunday", flush=True)
                print(f" Pure Veg on: Monday, Tuesday, Thursday, Saturday", flush=True)
                print(" Press Ctrl+C in this terminal to stop.", flush=True)
                print("=" * 60, flush=True)
                webbrowser.open(url)
                httpd.serve_forever()
                break
        except OSError:
            continue

if __name__ == "__main__":
    main()
