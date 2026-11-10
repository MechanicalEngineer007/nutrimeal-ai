"""
NutriMeal AI - Standalone Desktop Launcher
Starts the embedded local HTTP server and opens a frameless/app-mode window.
"""
import http.server
import socketserver
import subprocess
import shutil
import os
import sys
import webbrowser

PORT = 8080

def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    os.chdir(root_dir)
    handler = http.server.SimpleHTTPRequestHandler
    
    server = None
    active_port = PORT
    for p in range(PORT, PORT + 20):
        try:
            server = socketserver.TCPServer(("", p), handler)
            active_port = p
            break
        except OSError:
            continue
            
    if not server:
        print("[!] Could not bind to an available port. Opening local file directly...")
        index_file = os.path.join(root_dir, "index.html")
        webbrowser.open(f"file:///{index_file.replace(os.sep, '/')}")
        return

    url = f"http://localhost:{active_port}/index.html"
    print("=" * 60)
    print(f" NutriMeal AI Desktop is running at: {url}")
    print("=" * 60)

    # Attempt to open as a dedicated desktop application window
    launched = False
    for browser in ["msedge", "chrome", "brave"]:
        browser_path = shutil.which(browser)
        if browser_path:
            try:
                subprocess.Popen([browser_path, f"--app={url}", "--window-size=1280,850"])
                launched = True
                break
            except Exception:
                continue

    if not launched:
        webbrowser.open(url)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping NutriMeal AI Desktop...")
        server.shutdown()

if __name__ == "__main__":
    main()
