# PowerShell Deployment Script for mlotfy88.github.io
param(
    [string]$Username = "MLotfy88",
    [string]$RepoName = "mlotfy88.github.io"
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Deploying Executive Portfolio to GitHub Pages ($Username/$RepoName)" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Check git remote
$remoteUrl = "https://github.com/$Username/$RepoName.git"
$currentRemote = git remote get-url origin 2>$null

if ($null -eq $currentRemote) {
    Write-Host "Adding git remote origin: $remoteUrl" -ForegroundColor Yellow
    git remote add origin $remoteUrl
} else {
    Write-Host "Updating git remote origin to: $remoteUrl" -ForegroundColor Yellow
    git remote set-url origin $remoteUrl
}

# 2. Push to GitHub
Write-Host "Pushing main branch to GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "SUCCESS! Code pushed to GitHub successfully." -ForegroundColor Green
    Write-Host "Your website will be published at: https://$Username.github.io/" -ForegroundColor Cyan
    Write-Host "Ensure that under GitHub Settings -> Pages -> Source, 'GitHub Actions' is selected." -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "Push failed. Please ensure that:" -ForegroundColor Red
    Write-Host "1. The repository https://github.com/$Username/$RepoName exists and is set to Public." -ForegroundColor Red
    Write-Host "2. You are logged into GitHub in your browser/Git Credential Manager." -ForegroundColor Red
}
