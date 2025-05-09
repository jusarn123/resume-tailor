$folder = "C:\inetpub\vhosts\server.bluewatercoding.com\httpdocs\resumetailor"
$fsw = New-Object IO.FileSystemWatcher $folder -Property @{
    IncludeSubdirectories = $true
    NotifyFilter = [IO.NotifyFilters]'FileName, LastWrite'
}

$action = {
    Set-Location $folder
    git add .
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "auto sync at $timestamp" | Out-Null
    git push origin main | Out-Null
}

Register-ObjectEvent $fsw Changed -Action $action
Register-ObjectEvent $fsw Created -Action $action
Register-ObjectEvent $fsw Deleted -Action $action
Register-ObjectEvent $fsw Renamed -Action $action

Write-Host "Watching $folder for changes..."
while ($true) { Start-Sleep 10 }